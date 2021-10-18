/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CommunityGalleryImages } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import {
  CommunityGalleryImagesGetOptionalParams,
  CommunityGalleryImagesGetResponse
} from "../models";

/** Class containing CommunityGalleryImages operations. */
export class CommunityGalleryImagesImpl implements CommunityGalleryImages {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class CommunityGalleryImages class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Get a community gallery image.
   * @param location Resource location.
   * @param publicGalleryName The public name of the community gallery.
   * @param galleryImageName The name of the community gallery image definition.
   * @param options The options parameters.
   */
  get(
    location: string,
    publicGalleryName: string,
    galleryImageName: string,
    options?: CommunityGalleryImagesGetOptionalParams
  ): Promise<CommunityGalleryImagesGetResponse> {
    return this.client.sendOperationRequest(
      { location, publicGalleryName, galleryImageName, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/communityGalleries/{publicGalleryName}/images/{galleryImageName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CommunityGalleryImage
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
    Parameters.publicGalleryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
