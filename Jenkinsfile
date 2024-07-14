pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/arcana-network/auth-mkdocs.git'
        SERVER_USER = 'deploy'
        SERVER_IP = 'docs.dev-test.arcana.network'
        SERVER_PORT = '22'
        SERVER_DIR = '/home/deploy/'
    }

    stages {
        stage('Verify Environment Variables') {
            steps {
                sh """
                    echo "SERVER_USER: \$SERVER_USER"
                    echo "SERVER_IP: \$SERVER_IP"
                    echo "SERVER_PORT: \$SERVER_PORT"
                    echo "SERVER_DIR: \$SERVER_DIR"
                """
            }
        }

        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/lakshmikanth/AR-8099-Jenkis-setup']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: env.REPO_URL]]])
            }
        }

        stage('Sync to Server') {
            steps {
                sh """
                    rsync -avz -e 'ssh -p \$SERVER_PORT' --delete . \$SERVER_USER@\$SERVER_IP:\$SERVER_DIR
                """
            }
        }

        stage('Build on Server') {
            steps {
                sh """
                    ssh -p \$SERVER_PORT \$SERVER_USER@\$SERVER_IP '
                        cd \$SERVER_DIR &&
                        mkdocs build'
                """
            }
        }

        stage('Deploy') {
            steps {
                input message: 'Deploy to production?', ok: 'Deploy'
                sh """
                    ssh -p \$SERVER_PORT \$SERVER_USER@\$SERVER_IP 'sudo systemctl restart docs.service'
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
