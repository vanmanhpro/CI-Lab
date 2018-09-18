pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'sudo docker build -t nodeserver:onJenkins .'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'sudo docker run -it -d -p 3000:2200 --name node_server node_server:onJenkins'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}