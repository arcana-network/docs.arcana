pipeline {
    agent any

    environment {
        SERVER_USER = 'deploy'
        SERVER_IP = 'docs.dev-test.arcana.network'
        SERVER_PORT = '22'
        PRIVATE_KEY_PATH = '/home/deploy/.ssh/id_rsa'
        SERVER_DIR = '/home/deploy/your-mkdocs-directory'
    }

    stages {
        stage('Verify Environment Variables') {
            steps {
                sh """
                    echo "SERVER_USER: \$SERVER_USER"
                    echo "SERVER_IP: \$SERVER_IP"
                    echo "SERVER_PORT: \$SERVER_PORT"
                    echo "SERVER_DIR: \$SERVER_DIR"
                    echo "PRIVATE_KEY_PATH: \$PRIVATE_KEY_PATH"
                """
            }
        }

        stage('SSH Connectivity Check') {
            steps {
                script {
                    // Add the host key to known_hosts
                    sh "ssh-keyscan -p ${env.SERVER_PORT} ${env.SERVER_IP} >> ~/.ssh/known_hosts"
                    
                    // Test SSH connection
                    def remoteCommand = "echo 'SSH connection successful'"
                    def command = "ssh -i ${env.PRIVATE_KEY_PATH} -p ${env.SERVER_PORT} ${env.SERVER_USER}@${env.SERVER_IP} '${remoteCommand}'"
                    sh script: command
                }
            }
        }

        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/lakshmikanth/AR-8099-Jenkis-setup']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/arcana-network/auth-mkdocs.git']]])
            }
        }

        stage('Sync to Server') {
            steps {
                sh """
                    rsync -avz -e 'ssh -i ${PRIVATE_KEY_PATH}' --delete . ${SERVER_USER}@${SERVER_IP}:${SERVER_DIR}
                """
            }
        }

        stage('Build and Deploy') {
            steps {
                input message: 'Deploy to production?', ok: 'Deploy'
                sh """
                    ssh -i ${PRIVATE_KEY_PATH} -p ${SERVER_PORT} ${SERVER_USER}@${SERVER_IP} '
                        cd ${SERVER_DIR} &&
                        mkdocs build &&
                        sudo systemctl stop docs.service &&
                        sleep 5 &&
                        sudo systemctl start docs.service'
                """
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
