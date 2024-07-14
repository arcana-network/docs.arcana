pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/arcana-network/auth-mkdocs.git'  // Use HTTPS URL
    }

    stages {
        stage('Setup Environment') {
            steps {
                script {
                    // Create and activate a virtual environment using Python3
                    sh '''
                        python3 -m venv venv
                        . venv/bin/activate
                        pip install mkdocs
                    '''
                }
            }
        }

        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/lakshmikanth/AR-8099-Jenkis-setup']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: REPO_URL]]])
            }
        }

        stage('Spell Check') {
            steps {
                dir('auth-mkdocs/docs') {
                    sh '''
                        . ../../venv/bin/activate
                        spellchecker -d an_dictionary.txt --files '**/*.md' > /tmp/spellcheck.txt
                        if grep -q 'warning' /tmp/spellcheck.txt; then
                            echo "Spell checking failed"
                            exit 1
                        else
                            echo "No warnings in spell checking"
                        fi
                    '''
                }
            }
        }

        stage('Dead Link Check') {
            steps {
                dir('auth-mkdocs/docs') {
                    sh '''
                        . ../../venv/bin/activate
                        linkchecker ./site > /tmp/linkcheck.txt
                        if grep -q 'URL error' /tmp/linkcheck.txt; then
                            echo "Dead link check failed"
                            exit 1
                        else
                            echo "No dead links found"
                        fi
                    '''
                }
            }
        }

        stage('Build') {
            steps {
                sh '''
                    . venv/bin/activate
                    mkdocs build
                '''
            }
        }

        stage('Deploy') {
            steps {
                input message: 'Deploy to production?', ok: 'Deploy'
                sh '''
                    rsync -avz -e 'ssh -p ${SERVER_PORT}' --delete site/ ${SERVER_USER}@${SERVER_IP}:${SERVER_DIR}
                    ssh -p ${SERVER_PORT} ${SERVER_USER}@${SERVER_IP} 'sudo systemctl restart docs.service'
                '''
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
        always {
            // Clean up the virtual environment
            sh 'rm -rf venv'
        }
    }
}
