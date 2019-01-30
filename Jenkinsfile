pipeline {
    agent any

    tools {
        nodejs 'node 11'
    }
    stages {
        stage('Prepare') {
            steps{
                git 'https://github.com/TimGundmann/gundmann.dk.git'
                step {
                committerEmail = sh (
                        script: 'git --no-pager show -s --format=\'%ae\'',
                        returnStdout: true
                    ).trim()
                }
                sh 'npm install'
            }                
        }

        stage('Test') {
            steps{
                wrap([$class: 'Xvfb', displayName: 1]) {
                    sh "ps -aux | grep Xvfb"
                    sh "export DISPLAY=:1"
                    sh "ng test --watch false"
                }
            }                
        }

        stage('Build') {
            steps{   
                sh 'ng build --prod --evn=prod'
            }
        }
        stage('Deploy') {
            steps{
                sh 'docker-compose stop'
                sh 'docker-compose build'
                sh 'docker-compose up -d'
            }
        }
    }

  post {
      failure {
          mail bcc: '', body: 'Build faliure of gundmann.dk', cc: '', from: 'jenkins@gundmann.dk', replyTo: '', subject: 'faliure', to: committerEmail
      }
  }    
}
