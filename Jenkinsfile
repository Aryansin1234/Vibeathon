pipeline {
    agent any

    environment {
        NODE_VERSION = '16'
        CF_API = '<API_ENDPOINT>'
        CF_ORG = '<ORG>'
        CF_SPACE = '<SPACE>'
        CF_USERNAME = '<USERNAME>'
        CF_PASSWORD = '<PASSWORD>'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.tools.sap/SLI-Innovations/SIT_Vibeathon.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to BTP') {
            steps {
                sh '''
                cf login -a $CF_API -u $CF_USERNAME -p $CF_PASSWORD -o $CF_ORG -s $CF_SPACE
                cf push
                '''
            }
        }
    }
}