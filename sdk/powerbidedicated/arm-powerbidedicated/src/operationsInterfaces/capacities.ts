/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  DedicatedCapacity,
  CapacitiesListByResourceGroupOptionalParams,
  CapacitiesListOptionalParams,
  CapacitiesGetDetailsOptionalParams,
  CapacitiesGetDetailsResponse,
  CapacitiesCreateOptionalParams,
  CapacitiesCreateResponse,
  CapacitiesDeleteOptionalParams,
  DedicatedCapacityUpdateParameters,
  CapacitiesUpdateOptionalParams,
  CapacitiesUpdateResponse,
  CapacitiesSuspendOptionalParams,
  CapacitiesResumeOptionalParams,
  CapacitiesListSkusOptionalParams,
  CapacitiesListSkusResponse,
  CapacitiesListSkusForCapacityOptionalParams,
  CapacitiesListSkusForCapacityResponse,
  CheckCapacityNameAvailabilityParameters,
  CapacitiesCheckNameAvailabilityOptionalParams,
  CapacitiesCheckNameAvailabilityResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Capacities. */
export interface Capacities {
  /**
   * Gets all the Dedicated capacities for the given resource group.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: CapacitiesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<DedicatedCapacity>;
  /**
   * Lists all the Dedicated capacities for the given subscription.
   * @param options The options parameters.
   */
  list(
    options?: CapacitiesListOptionalParams
  ): PagedAsyncIterableIterator<DedicatedCapacity>;
  /**
   * Gets details about the specified dedicated capacity.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the dedicated capacity. It must be a minimum of 3
   *                              characters, and a maximum of 63.
   * @param options The options parameters.
   */
  getDetails(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    options?: CapacitiesGetDetailsOptionalParams
  ): Promise<CapacitiesGetDetailsResponse>;
  /**
   * Provisions the specified Dedicated capacity based on the configuration specified in the request.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the Dedicated capacity. It must be a minimum of 3
   *                              characters, and a maximum of 63.
   * @param capacityParameters Contains the information used to provision the Dedicated capacity.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    capacityParameters: DedicatedCapacity,
    options?: CapacitiesCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CapacitiesCreateResponse>,
      CapacitiesCreateResponse
    >
  >;
  /**
   * Provisions the specified Dedicated capacity based on the configuration specified in the request.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the Dedicated capacity. It must be a minimum of 3
   *                              characters, and a maximum of 63.
   * @param capacityParameters Contains the information used to provision the Dedicated capacity.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    capacityParameters: DedicatedCapacity,
    options?: CapacitiesCreateOptionalParams
  ): Promise<CapacitiesCreateResponse>;
  /**
   * Deletes the specified Dedicated capacity.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the Dedicated capacity. It must be at least 3 characters in
   *                              length, and no more than 63.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    options?: CapacitiesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the specified Dedicated capacity.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the Dedicated capacity. It must be at least 3 characters in
   *                              length, and no more than 63.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    options?: CapacitiesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates the current state of the specified Dedicated capacity.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the Dedicated capacity. It must be at least 3 characters in
   *                              length, and no more than 63.
   * @param capacityUpdateParameters Request object that contains the updated information for the
   *                                 capacity.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    capacityUpdateParameters: DedicatedCapacityUpdateParameters,
    options?: CapacitiesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CapacitiesUpdateResponse>,
      CapacitiesUpdateResponse
    >
  >;
  /**
   * Updates the current state of the specified Dedicated capacity.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the Dedicated capacity. It must be at least 3 characters in
   *                              length, and no more than 63.
   * @param capacityUpdateParameters Request object that contains the updated information for the
   *                                 capacity.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    capacityUpdateParameters: DedicatedCapacityUpdateParameters,
    options?: CapacitiesUpdateOptionalParams
  ): Promise<CapacitiesUpdateResponse>;
  /**
   * Suspends operation of the specified dedicated capacity instance.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the Dedicated capacity. It must be at least 3 characters in
   *                              length, and no more than 63.
   * @param options The options parameters.
   */
  beginSuspend(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    options?: CapacitiesSuspendOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Suspends operation of the specified dedicated capacity instance.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the Dedicated capacity. It must be at least 3 characters in
   *                              length, and no more than 63.
   * @param options The options parameters.
   */
  beginSuspendAndWait(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    options?: CapacitiesSuspendOptionalParams
  ): Promise<void>;
  /**
   * Resumes operation of the specified Dedicated capacity instance.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the Dedicated capacity. It must be at least 3 characters in
   *                              length, and no more than 63.
   * @param options The options parameters.
   */
  beginResume(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    options?: CapacitiesResumeOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Resumes operation of the specified Dedicated capacity instance.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the Dedicated capacity. It must be at least 3 characters in
   *                              length, and no more than 63.
   * @param options The options parameters.
   */
  beginResumeAndWait(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    options?: CapacitiesResumeOptionalParams
  ): Promise<void>;
  /**
   * Lists eligible SKUs for PowerBI Dedicated resource provider.
   * @param options The options parameters.
   */
  listSkus(
    options?: CapacitiesListSkusOptionalParams
  ): Promise<CapacitiesListSkusResponse>;
  /**
   * Lists eligible SKUs for a PowerBI Dedicated resource.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the Dedicated capacity. It must be at least 3 characters in
   *                              length, and no more than 63.
   * @param options The options parameters.
   */
  listSkusForCapacity(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    options?: CapacitiesListSkusForCapacityOptionalParams
  ): Promise<CapacitiesListSkusForCapacityResponse>;
  /**
   * Check the name availability in the target location.
   * @param location The region name which the operation will lookup into.
   * @param capacityParameters The name of the capacity.
   * @param options The options parameters.
   */
  checkNameAvailability(
    location: string,
    capacityParameters: CheckCapacityNameAvailabilityParameters,
    options?: CapacitiesCheckNameAvailabilityOptionalParams
  ): Promise<CapacitiesCheckNameAvailabilityResponse>;
}