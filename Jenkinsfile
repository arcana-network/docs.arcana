pipeline {
    agent any

    environment {
        SERVER_USER = 'deploy'
        SERVER_IP = 'docs.dev-test.arcana.network'
        SERVER_PORT = '22'
        PRIVATE_KEY_PATH = '/home/deploy/.ssh/id_rsa'
    }

    stages {
        stage('SSH Connectivity Check') {
            steps {
                script {
                    def remoteCommand = "echo 'SSH connection successful'"
                    def command = "ssh -i ${env.PRIVATE_KEY_PATH} -p ${env.SERVER_PORT} ${env.SERVER_USER}@${env.SERVER_IP} '${remoteCommand}'"
                    sh script: command
                }
            }
        }
    }

    post {
        success {
            echo 'SSH check completed successfully.'
        }
        failure {
            echo 'SSH check failed.'
        }
    }
}
