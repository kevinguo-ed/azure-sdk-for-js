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
  IscsiDisk,
  IscsiDisksListByDeviceOptionalParams,
  IscsiDisksListByIscsiServerOptionalParams,
  Metrics,
  IscsiDisksListMetricsOptionalParams,
  MetricDefinition,
  IscsiDisksListMetricDefinitionOptionalParams,
  IscsiDisksGetOptionalParams,
  IscsiDisksGetResponse,
  IscsiDisksCreateOrUpdateOptionalParams,
  IscsiDisksCreateOrUpdateResponse,
  IscsiDisksDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a IscsiDisks. */
export interface IscsiDisks {
  /**
   * Retrieves all the iSCSI disks in a device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  listByDevice(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksListByDeviceOptionalParams
  ): PagedAsyncIterableIterator<IscsiDisk>;
  /**
   * Retrieves all the disks in a iSCSI server.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  listByIscsiServer(
    deviceName: string,
    iscsiServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksListByIscsiServerOptionalParams
  ): PagedAsyncIterableIterator<IscsiDisk>;
  /**
   * Gets the iSCSI disk metrics
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param diskName The iSCSI disk name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  listMetrics(
    deviceName: string,
    iscsiServerName: string,
    diskName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksListMetricsOptionalParams
  ): PagedAsyncIterableIterator<Metrics>;
  /**
   * Retrieves metric definitions for all metric aggregated at the iSCSI disk.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param diskName The iSCSI disk name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  listMetricDefinition(
    deviceName: string,
    iscsiServerName: string,
    diskName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksListMetricDefinitionOptionalParams
  ): PagedAsyncIterableIterator<MetricDefinition>;
  /**
   * Returns the properties of the specified iSCSI disk name.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param diskName The disk name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  get(
    deviceName: string,
    iscsiServerName: string,
    diskName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksGetOptionalParams
  ): Promise<IscsiDisksGetResponse>;
  /**
   * Creates or updates the iSCSI disk.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param diskName The disk name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param iscsiDisk The iSCSI disk.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    deviceName: string,
    iscsiServerName: string,
    diskName: string,
    resourceGroupName: string,
    managerName: string,
    iscsiDisk: IscsiDisk,
    options?: IscsiDisksCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<IscsiDisksCreateOrUpdateResponse>,
      IscsiDisksCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates the iSCSI disk.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param diskName The disk name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param iscsiDisk The iSCSI disk.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    deviceName: string,
    iscsiServerName: string,
    diskName: string,
    resourceGroupName: string,
    managerName: string,
    iscsiDisk: IscsiDisk,
    options?: IscsiDisksCreateOrUpdateOptionalParams
  ): Promise<IscsiDisksCreateOrUpdateResponse>;
  /**
   * Deletes the iSCSI disk.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param diskName The disk name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  beginDelete(
    deviceName: string,
    iscsiServerName: string,
    diskName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the iSCSI disk.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param diskName The disk name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    deviceName: string,
    iscsiServerName: string,
    diskName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksDeleteOptionalParams
  ): Promise<void>;
}