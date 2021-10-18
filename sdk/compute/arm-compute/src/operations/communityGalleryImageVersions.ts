/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CommunityGalleryImageVersions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import {
  CommunityGalleryImageVersionsGetOptionalParams,
  CommunityGalleryImageVersionsGetResponse
} from "../models";

/** Class containing CommunityGalleryImageVersions operations. */
export class CommunityGalleryImageVersionsImpl
  implements CommunityGalleryImageVersions {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class CommunityGalleryImageVersions class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Get a community gallery image version.
   * @param location Resource location.
   * @param publicGalleryName The public name of the community gallery.
   * @param galleryImageName The name of the community gallery image definition.
   * @param galleryImageVersionName The name of the community gallery image version. Needs to follow
   *                                semantic version name pattern: The allowed characters are digit and period. Digits must be within
   *                                the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param options The options parameters.
   */
  get(
    location: string,
    publicGalleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    options?: CommunityGalleryImageVersionsGetOptionalParams
  ): Promise<CommunityGalleryImageVersionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        publicGalleryName,
        galleryImageName,
        galleryImageVersionName,
        options
      },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/communityGalleries/{publicGalleryName}/images/{galleryImageName}/versions/{galleryImageVersionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CommunityGalleryImageVersion
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.galleryImageName,
    Parameters.galleryImageVersionName,
    Parameters.publicGalleryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
