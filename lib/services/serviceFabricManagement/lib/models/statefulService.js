/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * The properties of a stateful service resource.
 *
 * @extends models['ServiceProperties']
 */
class StatefulService extends models['ServiceProperties'] {
  /**
   * Create a StatefulService.
   * @member {boolean} [hasPersistedState] A flag indicating whether this is a
   * persistent service which stores states on the local disk. If it is then
   * the value of this property is true, if not it is false.
   * @member {number} [targetReplicaSetSize] The target replica set size as a
   * number.
   * @member {number} [minReplicaSetSize] The minimum replica set size as a
   * number.
   * @member {date} [replicaRestartWaitDuration] The duration between when a
   * replica goes down and when a new replica is created, represented in ISO
   * 8601 format (hh:mm:ss.s).
   * @member {date} [quorumLossWaitDuration] The maximum duration for which a
   * partition is allowed to be in a state of quorum loss, represented in ISO
   * 8601 format (hh:mm:ss.s).
   * @member {date} [standByReplicaKeepDuration] The definition on how long
   * StandBy replicas should be maintained before being removed, represented in
   * ISO 8601 format (hh:mm:ss.s).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StatefulService
   *
   * @returns {object} metadata of StatefulService
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StatefulService',
      type: {
        name: 'Composite',
        className: 'StatefulService',
        modelProperties: {
          placementConstraints: {
            required: false,
            serializedName: 'placementConstraints',
            type: {
              name: 'String'
            }
          },
          correlationScheme: {
            required: false,
            serializedName: 'correlationScheme',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServiceCorrelationDescriptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'ServiceCorrelationDescription'
                  }
              }
            }
          },
          serviceLoadMetrics: {
            required: false,
            serializedName: 'serviceLoadMetrics',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServiceLoadMetricDescriptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'ServiceLoadMetricDescription'
                  }
              }
            }
          },
          servicePlacementPolicies: {
            required: false,
            serializedName: 'servicePlacementPolicies',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServicePlacementPolicyDescriptionElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: 'Type',
                      clientName: 'type'
                    },
                    uberParent: 'ServicePlacementPolicyDescription',
                    className: 'ServicePlacementPolicyDescription'
                  }
              }
            }
          },
          defaultMoveCost: {
            required: false,
            serializedName: 'defaultMoveCost',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'provisioningState',
            type: {
              name: 'String'
            }
          },
          serviceKind: {
            required: false,
            serializedName: 'serviceKind',
            type: {
              name: 'String'
            }
          },
          serviceTypeName: {
            required: false,
            serializedName: 'serviceTypeName',
            type: {
              name: 'String'
            }
          },
          partitionDescription: {
            required: false,
            serializedName: 'partitionDescription',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'PartitionScheme',
                clientName: 'partitionScheme'
              },
              uberParent: 'PartitionSchemeDescription',
              className: 'PartitionSchemeDescription'
            }
          },
          serviceResourceType: {
            required: true,
            serializedName: 'serviceResourceType',
            type: {
              name: 'String'
            }
          },
          hasPersistedState: {
            required: false,
            serializedName: 'hasPersistedState',
            type: {
              name: 'Boolean'
            }
          },
          targetReplicaSetSize: {
            required: false,
            serializedName: 'targetReplicaSetSize',
            constraints: {
              InclusiveMinimum: 1
            },
            type: {
              name: 'Number'
            }
          },
          minReplicaSetSize: {
            required: false,
            serializedName: 'minReplicaSetSize',
            constraints: {
              InclusiveMinimum: 1
            },
            type: {
              name: 'Number'
            }
          },
          replicaRestartWaitDuration: {
            required: false,
            serializedName: 'replicaRestartWaitDuration',
            type: {
              name: 'DateTime'
            }
          },
          quorumLossWaitDuration: {
            required: false,
            serializedName: 'quorumLossWaitDuration',
            type: {
              name: 'DateTime'
            }
          },
          standByReplicaKeepDuration: {
            required: false,
            serializedName: 'standByReplicaKeepDuration',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = StatefulService;
