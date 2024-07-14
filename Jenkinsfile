pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/arcana-network/auth-mkdocs.git'
        SERVER_ALIAS = 'docs_server'
        SERVER_DIR = '/home/deploy/'
    }

    stages {
        stage('Verify Environment Variables') {
            steps {
                sh """
                    echo "SERVER_ALIAS: \$SERVER_ALIAS"
                    echo "SERVER_DIR: \$SERVER_DIR"
                """
            }
        }

        stage('SSH Connectivity Check') {
            steps {
                script {
                    def remoteCommand = "echo 'SSH connection successful'"
                    def command = "ssh ${env.SERVER_ALIAS} '${remoteCommand}'"
                    sh script: command
                }
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
                    rsync -avz -e 'ssh' --delete . \$SERVER_ALIAS:\$SERVER_DIR
                """
            }
        }

        stage('Build on Server') {
            steps {
                sh """
                    ssh \$SERVER_ALIAS '
                        cd \$SERVER_DIR &&
                        mkdocs build'
                """
            }
        }

        stage('Deploy') {
            steps {
                input message: 'Deploy to production?', ok: 'Deploy'
                sh """
                    ssh \$SERVER_ALIAS 'sudo systemctl restart docs.service'
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
