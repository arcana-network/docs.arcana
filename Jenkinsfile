pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/lakshmikanth/AR-8099-Jenkis-setup']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: env.REPO_URL]]])
            }
        }

        stage('Build') {
            steps {
                sh """
                    ssh -p \$SERVER_PORT \$SERVER_USER@\$SERVER_IP '
                        cd \$SERVER_DIR && 
                        . venv/bin/activate && 
                        mkdocs build'
                """
            }
        }

        stage('Deploy') {
            steps {
                input message: 'Deploy to production?', ok: 'Deploy'
                sh """
                    rsync -avz -e 'ssh -p \$SERVER_PORT' --delete site/ \$SERVER_USER@\$SERVER_IP:\$SERVER_DIR
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
