node( params.workernode ) {
    ansiColor('xterm') {

        cleanWs()
        checkout scm
        milestone()

        try {

            stage('Build Performance Tests') {
                sh('rm -rf tests && mkdir -p tests/k6')
                sh('make build')
            }
            stage('Run Peformance Tests') {
                withCredentials([
                    usernamePassword(credentialsId: 'cloudstor_synthetic_test_user1', usernameVariable: 'CLOUDSTOR_USER1', passwordVariable: 'CLOUDSTOR_PASS1'),
                    usernamePassword(credentialsId: 'cloudstor_synthetic_test_user2', usernameVariable: 'CLOUDSTOR_USER2', passwordVariable: 'CLOUDSTOR_PASS2'),
                ]) {
                    sh('rm -rf out && mkdir -p out')
                    // currently fails if any step in the performance tests fails
                    sh('./scripts/cloudstor-quick-run.sh')
                }

            }
        }
        finally {
            archiveArtifacts allowEmptyArchive: true, artifacts: 'out/results.csv', followSymlinks: false
            archiveArtifacts allowEmptyArchive: true, artifacts: 'out/results.json', followSymlinks: false

            // TODO: look at exporting report in JUNIT XML Format: https://github.com/simbadltd/k6-junit
            // junit keepLongStdio: true, testResults: 'nightwatch_tests/tests_output/*.xml'
        }
    }
}
