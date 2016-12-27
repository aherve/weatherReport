. ./secret.env && \
  mongo $DB_URI ./query.js --quiet > data/history.tsv
