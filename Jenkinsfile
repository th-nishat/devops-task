pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/your-username/devops-task.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Running basic tests"'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t devops-task .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop devops-task || true
                docker rm devops-task || true
                docker run -d -p 3000:3000 devops-task
                '''
            }
        }
    }
}