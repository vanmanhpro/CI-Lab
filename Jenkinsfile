pipeline {
    environment {
        registry = "vanmanhpro/node_server"
        registryCredential = 'dockerhub'
    }
    agent any

    triggers {
        pollSCM('* * * * *')
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'docker kill node_server || true && docker rm node_server || true'
                sh 'docker build -t vanmanhpro/node_server:onJenkins .'
                docker.withRegistry('', registryCredential ) {
                    sh 'docker push vanmanhpro/node_server:onJenkins'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'docker run -it -d -p 3000:2200 --name node_server vanmanhpro/node_server:onJenkins'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}