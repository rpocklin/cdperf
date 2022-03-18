export CLOUDSTOR_USER1=cloudstor.automation-user1@aarnet.edu.au
export CLOUDSTOR_PASS1=

export CLOUDSTOR_USER2=cloudstor.automation-user2@aarnet.edu.au
export CLOUDSTOR_PASS2=

HOST=https://cloudstor.aarnet.edu.au

# SCRIPTS=$PWD/tests/k6/test-issue-github-ocis-1018-upload-download-delete-many-small.js
SCRIPTS=$PWD/tests/k6/test-issue-github-ocis-1399-share-with-new-user.js
#k6_scripts=${CDPERF_K6_SCRIPTS:-$(realpath "$(dirname "$0")/../tests/k6/test\-*.js")}

#  --k6-csv=results.csv \
#  --k6-csv=fileName=results.csv,useISO8601=true \

./scripts/cdperf \
  --k6-debug=true \
  --k6-test-host=$HOST \
  --cloud-docker=false \
  --cloud-vendor=oc10 \
  --k6-csv=results.csv \
  --k6-json=results.json \
  --k6-cloud-login=$CLOUDSTOR_USER1 \
  --k6-cloud-password=$CLOUDSTOR_PASS1 \
  --k6-docker=true --k6-vus=1 --k6-iterations=1 --k6-duration=1s --k6-scripts=$SCRIPTS

# ./scripts/cdperf --k6-debug=true --cloud-vendor=oc10 --k6-test-host=http://localhost:8080 \
#   --k6-docker=false --k6-vus=1 --k6-iterations=1 --k6-duration=1s --k6-scripts=$CDPERF_K6_SCRIPTS

# declare -a CHEAP_TESTS=(
#     "test-issue-github-ocis-1018-propfind-flat"
#     "test-issue-github-ocis-1018-propfind-deep"
#     "test-issue-github-ocis-1018-upload-download-delete-with-new-user"
#     "test-issue-github-ocis-1399-propfind-deep-rename"
#     "test-issue-github-ocis-1399-share-with-new-user"
# )

# declare -a EXPENSIVE_TESTS=(
#     "test-issue-github-ocis-1018-upload-download-delete-many-small"
#     "test-issue-github-ocis-1018-upload-download-delete-many-large"
#     "test-issue-github-enterprise-4115-most-used-sizes-upload"
# )

# function run_test() {
#     local test_path test_name N VU
#     test_path="$1"
#     test_name="$(basename "$test_path" .js)"
#     N="$2"
#     VU="$3"

#     echo "Running test $test_name with $N test sets and $VU virtual users..."
#     make run \
#         CDPERF_K6_CLOUD_LOGIN=cloudstor.automation-user1@aarnet.edu.au \
#         CDPERF_K6_CLOUD_PASSWORD=purpleCoff33 \
#         CDPERF_K6_TEST_HOST=https://cloudstor.aarnet.edu.au \
#         CDPERF_CLOUD_VENDOR="oc10" \
#         CDPERF_CLOUD_DOCKER="false" \
#         CDPERF_K6_DEBUG="true" \
#         CDPERF_K6_DURATION="1s" \
#         CDPERF_K6_CSV="results.csv" \
#         CDPERF_K6_JSON="results.json" \
#         CDPERF_N="$N" \
#         CDPERF_K6_VUS="$VU" \
#         CDPERF_K6_SCRIPTS="$test_path"
# }
