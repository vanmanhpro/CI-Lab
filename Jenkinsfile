pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'cat Dockerfile'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}