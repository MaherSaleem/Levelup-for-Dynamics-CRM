export type MessageType =
  | 'Page'
  | 'VisibilityCheck'
  | 'displayLogicalNames'
  | 'godMode'
  | 'formProperties'
  | 'highlightDirtyFields'
  | 'copyRecordUrl'
  | 'copyRecordId'
  | 'refreshAllSubgrids'
  | 'populateMin'
  | 'optionSetValues'
  | 'cloneRecord'
  | 'refresh'
  | 'toggleTabs'
  | 'workflows'
  | 'copyLookup'
  | 'pasteLookup'
  | 'openLookupNewWindow'
  | 'customize'
  | 'allFields'
  | 'openRecord'
  | 'newRecord'
  | 'openSecurity'
  | 'openSystemJobs'
  | 'openSolutions'
  | 'openProcesses'
  | 'openMain'
  | 'openAdvFind'
  | 'mocaClient'
  | 'myUserRecord'
  | 'myMailbox'
  | 'diagnostics'
  | 'perfCenter'
  | 'instancePicker'
  | 'openGrid'
  | 'quickFindFields'
  | 'environmentDetails'
  | 'myRoles'
  | 'allUserRoles'
  | 'processes'
  | 'Settings'
  | 'Extension'
  | 'Load';

export type Category =
  | 'Settings'
  | 'Extension'
  | 'Forms'
  | 'Navigation'
  | 'Grid'
  | 'API'
  | 'Load'
  | 'Extension'
  | 'myRoles'
  | 'allFields'
  | 'objectTypeCodes'
  | 'quickFindFields'
  | 'workflows'
  | 'allUserRoles'
  | 'optionsets'
  | 'environment';

export type ExtensionState = 'On' | 'Off';

export interface IExtensionMessage {
  type: MessageType;
  category?: Category;
  content?: IResultRow[] | IResultRowKeyValues[][] | string;
}

export interface ICustomMessage extends Event {
  detail: IExtensionMessage;
}

export enum AreaType {
  'Form',
  'Grid',
  'General',
}

export interface IResultRow {
  cells: string[];
}

export interface IResultRowKeyValues {
  key: string;
  value: string;
}

export interface IRetrieveCurrentOrganizationResponse {
  Detail: IRetrieveCurrentOrganizationResponseDetail;
}
export interface IRetrieveCurrentOrganizationResponseDetail {
  EnvironmentId: string;
  FriendlyName: string;
  Geo: string;
  OrganizationId: string;
  OrganizationVersion: string;
  State: string;
  TenantId: string;
  UniqueName: string;
  UrlName: string;
}

declare global {
  interface Window {
    Xrm: Xrm.XrmStatic
  }
}
