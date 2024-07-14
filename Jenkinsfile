pipeline {
    agent any

    environment {
        SERVER_ALIAS = 'docs_server'
    }

    stages {
        stage('SSH Connectivity Check') {
            steps {
                script {
                    def remoteCommand = "echo 'SSH connection successful'"
                    def command = "ssh ${env.SERVER_ALIAS} '${remoteCommand}'"
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
