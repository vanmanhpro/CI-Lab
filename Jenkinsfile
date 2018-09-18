pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'docker build -t node_server:onJenkins .'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'docker run -it -d -p 3000:2200 --name node_server node_server:onJenkins'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}