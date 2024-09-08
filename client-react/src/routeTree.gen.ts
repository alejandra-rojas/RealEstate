/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as IndexImport } from './routes/index'
import { Route as FilesIndexImport } from './routes/files/index'
import { Route as PropertiesIdImport } from './routes/properties/$id'
import { Route as FilesIdImport } from './routes/files/$id'

// Create/Update Routes

const DashboardRoute = DashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const FilesIndexRoute = FilesIndexImport.update({
  path: '/files/',
  getParentRoute: () => rootRoute,
} as any)

const PropertiesIdRoute = PropertiesIdImport.update({
  path: '/properties/$id',
  getParentRoute: () => rootRoute,
} as any)

const FilesIdRoute = FilesIdImport.update({
  path: '/files/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/files/$id': {
      id: '/files/$id'
      path: '/files/$id'
      fullPath: '/files/$id'
      preLoaderRoute: typeof FilesIdImport
      parentRoute: typeof rootRoute
    }
    '/properties/$id': {
      id: '/properties/$id'
      path: '/properties/$id'
      fullPath: '/properties/$id'
      preLoaderRoute: typeof PropertiesIdImport
      parentRoute: typeof rootRoute
    }
    '/files/': {
      id: '/files/'
      path: '/files'
      fullPath: '/files'
      preLoaderRoute: typeof FilesIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRoute
  '/files/$id': typeof FilesIdRoute
  '/properties/$id': typeof PropertiesIdRoute
  '/files': typeof FilesIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRoute
  '/files/$id': typeof FilesIdRoute
  '/properties/$id': typeof PropertiesIdRoute
  '/files': typeof FilesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRoute
  '/files/$id': typeof FilesIdRoute
  '/properties/$id': typeof PropertiesIdRoute
  '/files/': typeof FilesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/dashboard' | '/files/$id' | '/properties/$id' | '/files'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/dashboard' | '/files/$id' | '/properties/$id' | '/files'
  id:
    | '__root__'
    | '/'
    | '/dashboard'
    | '/files/$id'
    | '/properties/$id'
    | '/files/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DashboardRoute: typeof DashboardRoute
  FilesIdRoute: typeof FilesIdRoute
  PropertiesIdRoute: typeof PropertiesIdRoute
  FilesIndexRoute: typeof FilesIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DashboardRoute: DashboardRoute,
  FilesIdRoute: FilesIdRoute,
  PropertiesIdRoute: PropertiesIdRoute,
  FilesIndexRoute: FilesIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard",
        "/files/$id",
        "/properties/$id",
        "/files/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.tsx"
    },
    "/files/$id": {
      "filePath": "files/$id.tsx"
    },
    "/properties/$id": {
      "filePath": "properties/$id.tsx"
    },
    "/files/": {
      "filePath": "files/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
