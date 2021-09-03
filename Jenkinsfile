pipeline{
    agent{
        node{
            label "docker-chrome"
        }
    }

    stages{
        stage('Preparation'){
            steps{
                sh 'npm install'
            }
        }

        stage('Run Test'){
            steps{
                sh 'npm test'
            }
        }


    }

    post{
        always{
            cucumber jsonReportDirectory: 'cypress/cucumber-json',
                    fileIncludePattern: '**/*.json'
        }
    }
}