/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
      id
      sub
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
      id
      sub
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
      id
      sub
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createJobTitles = /* GraphQL */ `
  mutation CreateJobTitles(
    $input: CreateJobTitlesInput!
    $condition: ModelJobTitlesConditionInput
  ) {
    createJobTitles(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateJobTitles = /* GraphQL */ `
  mutation UpdateJobTitles(
    $input: UpdateJobTitlesInput!
    $condition: ModelJobTitlesConditionInput
  ) {
    updateJobTitles(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteJobTitles = /* GraphQL */ `
  mutation DeleteJobTitles(
    $input: DeleteJobTitlesInput!
    $condition: ModelJobTitlesConditionInput
  ) {
    deleteJobTitles(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createSex = /* GraphQL */ `
  mutation CreateSex(
    $input: CreateSexInput!
    $condition: ModelSexConditionInput
  ) {
    createSex(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateSex = /* GraphQL */ `
  mutation UpdateSex(
    $input: UpdateSexInput!
    $condition: ModelSexConditionInput
  ) {
    updateSex(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteSex = /* GraphQL */ `
  mutation DeleteSex(
    $input: DeleteSexInput!
    $condition: ModelSexConditionInput
  ) {
    deleteSex(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createAsinUserOfTenant = /* GraphQL */ `
  mutation CreateAsinUserOfTenant(
    $input: CreateAsinUserOfTenantInput!
    $condition: ModelAsinUserOfTenantConditionInput
  ) {
    createAsinUserOfTenant(input: $input, condition: $condition) {
      id
      tenantID
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateAsinUserOfTenant = /* GraphQL */ `
  mutation UpdateAsinUserOfTenant(
    $input: UpdateAsinUserOfTenantInput!
    $condition: ModelAsinUserOfTenantConditionInput
  ) {
    updateAsinUserOfTenant(input: $input, condition: $condition) {
      id
      tenantID
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteAsinUserOfTenant = /* GraphQL */ `
  mutation DeleteAsinUserOfTenant(
    $input: DeleteAsinUserOfTenantInput!
    $condition: ModelAsinUserOfTenantConditionInput
  ) {
    deleteAsinUserOfTenant(input: $input, condition: $condition) {
      id
      tenantID
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      StockDataPools {
        nextToken
        startedAt
        __typename
      }
      tenantsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      StockDataPools {
        nextToken
        startedAt
        __typename
      }
      tenantsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      StockDataPools {
        nextToken
        startedAt
        __typename
      }
      tenantsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createTenants = /* GraphQL */ `
  mutation CreateTenants(
    $input: CreateTenantsInput!
    $condition: ModelTenantsConditionInput
  ) {
    createTenants(input: $input, condition: $condition) {
      id
      name
      StockDataPools {
        nextToken
        startedAt
        __typename
      }
      Events {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateTenants = /* GraphQL */ `
  mutation UpdateTenants(
    $input: UpdateTenantsInput!
    $condition: ModelTenantsConditionInput
  ) {
    updateTenants(input: $input, condition: $condition) {
      id
      name
      StockDataPools {
        nextToken
        startedAt
        __typename
      }
      Events {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteTenants = /* GraphQL */ `
  mutation DeleteTenants(
    $input: DeleteTenantsInput!
    $condition: ModelTenantsConditionInput
  ) {
    deleteTenants(input: $input, condition: $condition) {
      id
      name
      StockDataPools {
        nextToken
        startedAt
        __typename
      }
      Events {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createStksCategory = /* GraphQL */ `
  mutation CreateStksCategory(
    $input: CreateStksCategoryInput!
    $condition: ModelStksCategoryConditionInput
  ) {
    createStksCategory(input: $input, condition: $condition) {
      id
      name
      StocksSubCategories {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateStksCategory = /* GraphQL */ `
  mutation UpdateStksCategory(
    $input: UpdateStksCategoryInput!
    $condition: ModelStksCategoryConditionInput
  ) {
    updateStksCategory(input: $input, condition: $condition) {
      id
      name
      StocksSubCategories {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteStksCategory = /* GraphQL */ `
  mutation DeleteStksCategory(
    $input: DeleteStksCategoryInput!
    $condition: ModelStksCategoryConditionInput
  ) {
    deleteStksCategory(input: $input, condition: $condition) {
      id
      name
      StocksSubCategories {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createStockDataPool = /* GraphQL */ `
  mutation CreateStockDataPool(
    $input: CreateStockDataPoolInput!
    $condition: ModelStockDataPoolConditionInput
  ) {
    createStockDataPool(input: $input, condition: $condition) {
      id
      itemName
      barcode
      expiration
      stockInt
      limitInt
      value
      purchaseID
      untitledfield
      status
      stockssubcategoryID
      tenantsID
      events {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateStockDataPool = /* GraphQL */ `
  mutation UpdateStockDataPool(
    $input: UpdateStockDataPoolInput!
    $condition: ModelStockDataPoolConditionInput
  ) {
    updateStockDataPool(input: $input, condition: $condition) {
      id
      itemName
      barcode
      expiration
      stockInt
      limitInt
      value
      purchaseID
      untitledfield
      status
      stockssubcategoryID
      tenantsID
      events {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteStockDataPool = /* GraphQL */ `
  mutation DeleteStockDataPool(
    $input: DeleteStockDataPoolInput!
    $condition: ModelStockDataPoolConditionInput
  ) {
    deleteStockDataPool(input: $input, condition: $condition) {
      id
      itemName
      barcode
      expiration
      stockInt
      limitInt
      value
      purchaseID
      untitledfield
      status
      stockssubcategoryID
      tenantsID
      events {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createStocksSubCategory = /* GraphQL */ `
  mutation CreateStocksSubCategory(
    $input: CreateStocksSubCategoryInput!
    $condition: ModelStocksSubCategoryConditionInput
  ) {
    createStocksSubCategory(input: $input, condition: $condition) {
      id
      name
      stkscategoryID
      StockDataPools {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateStocksSubCategory = /* GraphQL */ `
  mutation UpdateStocksSubCategory(
    $input: UpdateStocksSubCategoryInput!
    $condition: ModelStocksSubCategoryConditionInput
  ) {
    updateStocksSubCategory(input: $input, condition: $condition) {
      id
      name
      stkscategoryID
      StockDataPools {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteStocksSubCategory = /* GraphQL */ `
  mutation DeleteStocksSubCategory(
    $input: DeleteStocksSubCategoryInput!
    $condition: ModelStocksSubCategoryConditionInput
  ) {
    deleteStocksSubCategory(input: $input, condition: $condition) {
      id
      name
      stkscategoryID
      StockDataPools {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createEventStockDataPool = /* GraphQL */ `
  mutation CreateEventStockDataPool(
    $input: CreateEventStockDataPoolInput!
    $condition: ModelEventStockDataPoolConditionInput
  ) {
    createEventStockDataPool(input: $input, condition: $condition) {
      id
      eventId
      stockDataPoolId
      event {
        id
        tenantsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      stockDataPool {
        id
        itemName
        barcode
        expiration
        stockInt
        limitInt
        value
        purchaseID
        untitledfield
        status
        stockssubcategoryID
        tenantsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateEventStockDataPool = /* GraphQL */ `
  mutation UpdateEventStockDataPool(
    $input: UpdateEventStockDataPoolInput!
    $condition: ModelEventStockDataPoolConditionInput
  ) {
    updateEventStockDataPool(input: $input, condition: $condition) {
      id
      eventId
      stockDataPoolId
      event {
        id
        tenantsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      stockDataPool {
        id
        itemName
        barcode
        expiration
        stockInt
        limitInt
        value
        purchaseID
        untitledfield
        status
        stockssubcategoryID
        tenantsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteEventStockDataPool = /* GraphQL */ `
  mutation DeleteEventStockDataPool(
    $input: DeleteEventStockDataPoolInput!
    $condition: ModelEventStockDataPoolConditionInput
  ) {
    deleteEventStockDataPool(input: $input, condition: $condition) {
      id
      eventId
      stockDataPoolId
      event {
        id
        tenantsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      stockDataPool {
        id
        itemName
        barcode
        expiration
        stockInt
        limitInt
        value
        purchaseID
        untitledfield
        status
        stockssubcategoryID
        tenantsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
