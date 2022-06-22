import { GlobalColorTypes } from "../../core";

export const AlertContainerClasses = {
  [GlobalColorTypes.PRIMARY]:
    "flex p-4 mb-4 bg-blue-100 border-t-4 border-blue-500 dark:bg-blue-200",
  [GlobalColorTypes.DANGER]:
    "flex p-4 mb-4 bg-red-100 border-t-4 border-red-500 dark:bg-red-200",
  [GlobalColorTypes.SUCCESS]:
    "flex p-4 mb-4 bg-green-100 border-t-4 border-green-500 dark:bg-green-200",
  [GlobalColorTypes.WARN]:
    "flex p-4 mb-4 bg-yellow-100 border-t-4 border-yellow-500 dark:bg-yellow-200",
  [GlobalColorTypes.SECONDARY]:
    "flex p-4 bg-gray-100 border-t-4 border-gray-500 dark:bg-gray-700",
};

export const AlertInfoSVG = {
  [GlobalColorTypes.PRIMARY]: "flex-shrink-0 w-5 h-5 text-blue-700",
  [GlobalColorTypes.DANGER]: "flex-shrink-0 w-5 h-5 text-red-700",
  [GlobalColorTypes.SUCCESS]: "flex-shrink-0 w-5 h-5 text-green-700",
  [GlobalColorTypes.WARN]: "flex-shrink-0 w-5 h-5 text-yellow-700",
  [GlobalColorTypes.SECONDARY]:
    "flex-shrink-0 w-5 h-5 text-gray-700 dark:text-gray-300",
};

export const AlertMessageClass = {
  [GlobalColorTypes.PRIMARY]: "ml-3 text-sm font-medium text-blue-700",
  [GlobalColorTypes.DANGER]: "ml-3 text-sm font-medium text-red-700",
  [GlobalColorTypes.SUCCESS]: "ml-3 text-sm font-medium text-green-700",
  [GlobalColorTypes.WARN]: "ml-3 text-sm font-medium text-yellow-700",
  [GlobalColorTypes.SECONDARY]:
    "ml-3 text-sm font-medium text-gray-700 dark:text-gray-300",
};

export const AlertButtonClass = {
  [GlobalColorTypes.PRIMARY]:
    "ml-auto -mx-1.5 -my-1.5 bg-blue-100 dark:bg-blue-200 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 dark:hover:bg-blue-300 inline-flex h-8 w-8",
  [GlobalColorTypes.DANGER]:
    "ml-auto -mx-1.5 -my-1.5 bg-red-100 dark:bg-red-200 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 dark:hover:bg-red-300 inline-flex h-8 w-8",
  [GlobalColorTypes.SUCCESS]:
    "ml-auto -mx-1.5 -my-1.5 bg-green-100 dark:bg-green-200 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 dark:hover:bg-green-300 inline-flex h-8 w-8",
  [GlobalColorTypes.WARN]:
    "ml-auto -mx-1.5 -my-1.5 bg-yellow-100 dark:bg-yellow-200 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 dark:hover:bg-yellow-300 inline-flex h-8 w-8",
  [GlobalColorTypes.SECONDARY]:
    "ml-auto -mx-1.5 -my-1.5 bg-gray-100 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex h-8 w-8 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
};
