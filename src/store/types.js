// Getters
export const IS_SIDEBAR_OPENED = 'view/IS_SIDEBAR_OPENED'
export const IS_AUTHENTICATED = 'user/IS_AUTHENTICATED'
export const GET_USER_INFO = 'user/GET_USER_INFO'
export const GET_USER_ERROR_MESSAGE = 'user/GET_USER_ERROR_MESSAGE'
export const IS_LOADING = 'user/IS_LOADING'
/** OBSERVED DATA */
export const ALL_OBSERVED_DATA ='observed_data/ALL_OBSERVED_DATA'
export const OBSERVED_DATA ='observed_data/OBSERVED_DATA'
export const OBSERVED_DATA_TOTAL = 'observed_data/OBSERVED_DATA_TOTAL'
export const OBSERVED_DATA_LOADING = 'observed_data/OBSERVED_DATA_LOADING'
/** INDICATOR */
export const ALL_INDICATOR ='indicator/ALL_INDICATOR'
export const INDICATOR ='indicator/INDICATOR'
export const INDICATOR_TOTAL = 'indicator/INDICATOR_TOTAL'
export const INDICATOR_LOADING = 'indicator/INDICATOR_LOADING'
/** IDENTITY */
export const ALL_IDENTITY ='identity/ALL_IDENTITY'
export const IDENTITY ='identity/IDENTITY'
export const IDENTITY_TOTAL = 'identity/IDENTITY_TOTAL'
export const IDENTITY_LOADING = 'identity/IDENTITY_LOADING'
/** THREAT_ACTOR */
export const ALL_THREAT_ACTOR ='threat_actor/ALL_THREAT_ACTOR'
export const THREAT_ACTOR ='threat_actor/THREAT_ACTOR'
export const THREAT_ACTOR_TOTAL = 'threat_actor/THREAT_ACTOR_TOTAL'
export const THREAT_ACTOR_LOADING = 'threat_actor/THREAT_ACTOR_LOADING'
/** ATTACK_PATTERN */
export const ALL_ATTACK_PATTERN ='attack_pattern/ALL_ATTACK_PATTERN'
export const ATTACK_PATTERN ='attack_pattern/ATTACK_PATTERN'
export const ATTACK_PATTERN_TOTAL = 'attack_pattern/ATTACK_PATTERN_TOTAL'
export const ATTACK_PATTERN_LOADING = 'attack_pattern/ATTACK_PATTERN_LOADING'
/** BUNDLE */
export const ALL_BUNDLE ='bundle/ALL_BUNDLE'
export const BUNDLE ='bundle/BUNDLE'
export const BUNDLE_TOTAL = 'bundle/BUNDLE_TOTAL'
export const BUNDLE_LOADING = 'bundle/BUNDLE_LOADING'
export const BUNDLE_SELECTED_BUNDLE = 'bundle/BUNDLE_SELECTED_BUNDLE'
export const BUNDLE_SELECTED_NODE = 'bundle/BUNDLE_SELECTED_NODE'
export const BUNDLE_LEGEND = 'bundle/BUNDLE_LEGEND'


// Mutations
export const MUTATE_TOGGLE_SIDEBAR = 'view/MUTATE_TOGGLE_SIDEBAR'
export const MUTATE_AUTH_USER = 'user/MUTATE_AUTH_USER'
export const MUTATE_STORE_USER = 'user/MUTATE_STORE_USER'
export const MUTATE_CLEAR_AUTH_DATA = 'user/MUTATE_CLEAR_AUTH_DATA'
export const MUTATE_USER_ERROR_MESSAGE = 'user/MUTATE_USER_ERROR_MESSAGE'
export const MUTATE_IS_LOADING = 'user/MUTATE_IS_LOADING'
/** OBSERVED DATA */
export const MUTATE_ALL_OBSERVED_DATA = 'observed_data/MUTATE_ALL_OBSERVED_DATA'
export const MUTATE_OBSERVED_DATA = 'observed_data/MUTATE_OBSERVED_DATA'
export const MUTATE_OBSERVED_DATA_LOADING = 'observed_data/MUTATE_OBSERVED_DATA_LOADING'
/** INDICATOR */
export const MUTATE_ALL_INDICATOR = 'indicator/MUTATE_ALL_INDICATOR'
export const MUTATE_INDICATOR = 'indicator/MUTATE_INDICATOR'
export const MUTATE_INDICATOR_LOADING = 'indicator/MUTATE_INDICATOR_LOADING'
/** IDENTITY */
export const MUTATE_ALL_IDENTITY = 'identity/MUTATE_ALL_IDENTITY'
export const MUTATE_IDENTITY = 'identity/MUTATE_IDENTITY'
export const MUTATE_IDENTITY_LOADING = 'identity/MUTATE_IDENTITY_LOADING'
/** THREAT_ACTOR */
export const MUTATE_ALL_THREAT_ACTOR = 'threat_actor/MUTATE_ALL_THREAT_ACTOR'
export const MUTATE_THREAT_ACTOR = 'threat_actor/MUTATE_THREAT_ACTOR'
export const MUTATE_THREAT_ACTOR_LOADING = 'threat_actor/MUTATE_THREAT_ACTOR_LOADING'
/** ATTACK_PATTERN */
export const MUTATE_ALL_ATTACK_PATTERN = 'attack_pattern/MUTATE_ALL_ATTACK_PATTERN'
export const MUTATE_ATTACK_PATTERN = 'attack_pattern/MUTATE_ATTACK_PATTERN'
export const MUTATE_ATTACK_PATTERN_LOADING = 'attack_pattern/MUTATE_ATTACK_PATTERN_LOADING'
/** BUNDLE */
export const MUTATE_ALL_BUNDLE = 'bundle/MUTATE_ALL_BUNDLE'
export const MUTATE_BUNDLE = 'bundle/MUTATE_BUNDLE'
export const MUTATE_BUNDLE_LOADING = 'bundle/MUTATE_BUNDLE_LOADING'
export const MUTATE_BUNDLE_SELECTED_BUNDLE = 'bundle/MUTATE_BUNDLE_SELECTED_BUNDLE'
export const MUTATE_BUNDLE_SELECTED_NODE = 'bundle/MUTATE_BUNDLE_SELECTED_NODE'

// Actions
export const VIEW_TOGGLE_SIDEBAR = 'view/VIEW_TOGGLE_SIDEBAR'
export const SET_LOGOUT_TIMER = 'user/SET_LOGOUT_TIMER'
export const REGISTER = 'user/REGISTER'
export const LOGIN = 'user/SIGN_IN'
export const TRY_AUTO_LOGIN = 'user/TRY_AUTO_LOGIN'
export const LOGOUT = 'user/LOGOUT'
export const SET_USER_ERROR_MESSAGE = 'user/SET_USER_ERROR_MESSAGE'
/** OBSERVED DATA */
export const GET_ALL_OBSERVED_DATA = 'observed_data/GET_ALL_OBSERVED_DATA'
export const GET_OBSERVED_DATA = 'observed_data/GET_OBSERVED_DATA'
/** INDICATOR */
export const GET_ALL_INDICATOR = 'indicator/GET_ALL_INDICATOR'
export const GET_INDICATOR = 'indicator/GET_INDICATOR'
/** IDENTITY */
export const GET_ALL_IDENTITY = 'indicator/GET_ALL_IDENTITY'
export const GET_IDENTITY = 'indicator/GET_IDENTITY'
/** THREAT_ACTOR */
export const GET_ALL_THREAT_ACTOR = 'indicator/GET_ALL_THREAT_ACTOR'
export const GET_THREAT_ACTOR = 'indicator/GET_THREAT_ACTOR'
/** ATTACK_PATTERN */
export const GET_ALL_ATTACK_PATTERN = 'indicator/GET_ALL_ATTACK_PATTERN'
export const GET_ATTACK_PATTERN = 'indicator/GET_ATTACK_PATTERN'
/** BUNDLE */
export const GET_ALL_BUNDLE = 'indicator/GET_ALL_BUNDLE'
export const GET_BUNDLE = 'indicator/GET_BUNDLE'
export const CHANGE_BUNDLE_SELECTED_BUNDLE = 'bundle/CHANGE_BUNDLE_SELECTED_BUNDLE'
export const CHANGE_BUNDLE_SELECTED_NODE = 'bundle/CHANGE_BUNDLE_SELECTED_NODE'
// export const STORE_USER = 'user/STORE_USER'
// export const FETCH_USER = 'user/FETCH_USER'