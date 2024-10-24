const NODE_KEYS = {
  substrate_block_verification_and_import_time:
    "substrate_block_verification_and_import_time",
  substrate_block_verification_time: "substrate_block_verification_time",
  substrate_justification_import_time: "substrate_justification_import_time",
  substrate_proposer_block_constructed: "substrate_proposer_block_constructed",
  substrate_proposer_block_proposal_time:
    "substrate_proposer_block_proposal_time",
  substrate_proposer_create_inherents_time:
    "substrate_proposer_create_inherents_time",
};

const MATRICS_KEYS = {
  "+Inf": "+Inf",
  10: "10",
  5: "5",
  1: "1",
  2.5: "2.5",
  0.5: "0.5",
  0.25: "0.25",
  0.1: "0.1",
  0.05: "0.05",
  0.025: "0.025",
  0.01: "0.01",
  0.005: "0.005",
};

module.exports = { NODE_KEYS, MATRICS_KEYS };
