/// <reference path="../_all.ts" />

app.config(['$translateProvider', function ($translateProvider) {
	$translateProvider.translations('en', {
		'APP_NAME': 'dewpoint',
		'COMPUTE': 'Compute',
		'NETWORKING': 'Networking',
		'NETWORK': 'Network',
		'VOLUME': 'Volume',
		'VOLUMES': 'Volumes',
		'SNAPSHOT': 'Snapshot',
		'SNAPSHOTS': 'Snapshots',
		'STORAGE': "Storage",
		'MORE': "More",
		'MAP': "Map",
		'NETWORKS': 'Networks',
		'FLOATING_IPS': "Floating IPs",
		'FLOATING_IP': "Floating IP",
		'ROUTER': "Router",
		'ROUTERS': "Routers",
		'EXTRA': "Extra",
		'LOGIN_WELCOME': 'Welcome back! Please login.',
		'LOGIN_USER_LABEL': 'Sign in with e-mail address',
		'USERNAME': 'Username',
		'LOGIN_PASSWORD_LABEL': 'Password',
		'PASSWORD': 'Password',
		'LOGIN_CTA': 'Login',
		'LOGIN_ALTERNATE_MSG': 'Or login via OpenID',
		'LOGIN_REGISTER_MSG': "Don't have an account? Get Started",
		'LOGIN_FORGOT_PASSWORD': 'Forgot Password?',
		'DASHBOARD': "Dashboard",
		'DASHBOARD_TITLE': 'Get started with Dewpoint',
		'DASHBOARD_SECONDARY_TITLE': 'Get insights into Aurora activities using graphs and vizualization tools.',
		'DASHBOARD_NEWVM_MSG': 'Easily deploy new \n virtual machines',
		'DASHBOARD_NEWVM_CTA': 'New VM',
		'NOTIFICATIONS': 'Notifications',
		'NOTIFICATIONS_ALT': 'News from above',
		'WIDGETS': 'Widgets',
		'WIDGETS_DRAGDROP': 'Drag and drop widgets to the canvas',
		'CHARTS': 'Charts',
		'CHARTS_MSG': "Add any chart to the dashboard",
		'GAUGES': 'Gauges',
		'GAUGES_MSG': "Add and configure any number of gauges.",
		'BILLING': 'Billing',
		'BILLING_MSG': 'The main billing and expences widget.',
		'CONSOLE': 'Console',
		'CONSOLE_MSG': 'Quick SSH Console to any VM.',
		'VIRTUAL_MACHINE': 'Virtual Machine',
		'VIRTUAL_MACHINES': 'Virtual Machines',
		'NEW_VM': 'New VM',
		'FILTER': 'Filter',
		'ACTIONS': 'Actions',
		'NAME': 'Name',
		'IP': 'Ip',
		'STARTED': 'Started',
		'COST': 'Cost',
		'REGION': 'Region',
		'STATUS': 'Status',
		'PAUSE': 'Pause',
		'START': 'Start',
		'RESTART': 'Restart',
		'DELETE': 'Delete',
		'SHUTOFF': 'Shutoff',
		'RESIZE': 'Resize',
		'EDIT': "Edit",
		'YES': 'Yes',
		'No': 'No',
		'ALL': 'All',
		'recommended': 'Recommended',
		'favorites': 'Favorites',
		'ATTACH_TO': 'Attach to ...',
		'ATTACHED_TO': "Attached to",
		'DESCRIPTION': 'Description',
		'PRICE_MONTH': 'Eur/Month',
		'VM_DELETE_CONFIRM': 'Are you sure you want to delete this VM? This action is undoable.',
		'SNAPSHOT_DELETE_CONFIRM': 'Are you sure you want to delete this Snapshot? This action is undoable.',
		'VOLUME_DELETE_CONFIRM': "Are you sure you want to delete this Volume? This action is undoable.",
		'NETWORK_INT_DELETE_CONFRIM': 'Are you sure you want to remove this network interface?',
		'NETWORK_DELETE_CONFIRM': '',
		'NEW_VIRTUAL_MACHINE': 'New Virtual Machine',
		'GENERAL': "General",
		'TAKE_SNAPSHOT': "Take snapshot",
		'DETACH_VOLUME': "Detach volume",
		'NEW_VOLUME': 'New Volume',
		'CREATE_VOLUME': "Create Volume",
		'INCREASE_STORAGE': 'Increase storage',
		'EDIT_VOLUME_DETAILS': "Edit Volume Details",
		'VOLUME_PROJECT_LIMIT': 'Volume Storage Project Limit',
		'RESIZE_VM': 'Resize Virtual Machine',
		'COUNT': "Count",
		'CHOOSE_SOURCE': "Choose Source",
		'IMAGES': 'Images',
		'SUBNET': "Subnet",
		'BOOTABLE': "Bootable",
		'EMPTY': 'Empty',
		'NO_SOURCE': "No source, empty volume",
		'DATE': "Date",
		'SUBNETS': "Subnets",
		'STATE': "State",
		'SECURITY_GROUP': "Security Group",
		'SECURITY_GROUPS': "Security Groups",
		'SIZE' : "Size",
		'SHARED' : "Shared",
		'LAUNCH_VIRTUAL_MACHINE': 'Launch Virtual Machine',
		'NO_SNAPSHOTS': 'No snapshots available',
		'NO_VOLUMES': 'No volumes',
		'OVERVIEW': 'Overview',
		'LOG': "Log",
		'ALL_ACTIONS': 'All Actions',
		'PROJECT_LIMITS': 'Project Limits',
		'ESTIMATED_COSTS': 'Estimated Costs',
		'MONTHLY_COST_INSTANCE': "Monthly cost/instance",
		'MONTHLY_COST_PROJECT': "Monthly cost/project",
		'SUMMARY': "Summary",
		'ADD_INTERFACE': "Add Interface",
		'INTERFACE': 'Interface',
		'INTERFACES': 'Interfaces',
		'IP_ADDRESS': "IP Address",
		'ASSOCIATE': 'Associate',
		'RELEASE': "Release",
		'RELEASE_FLOATING_IP': 'Release Floating IP',
		'RELEASE_FLOATING_IP_CONFIRM': 'Are you sure you want to release this flaoting ip?',
		'DELETE_FLOATING_IP_CONFIRM': 'Are you sure you want to delete this flaoting ip?',
		'NETWORK_MAP': 'Network Map',
		'SUBNETS_ASSOCIATED': 'Subnets Associated',
		'ADMIN_STATE': 'Admin State',
		'STATIC_ROUTES': 'Static Routes',
		'CREATE_NETWORK': 'Create Network',
		'CREATE_ROUTER': 'Create Router',
		'POOL': 'Pool',
		'RESERVE_IP': 'Reserve IP',
		'RESERVE_FLOATING_IP': 'Reserve Floating IP',
		'ALLOCATE_IP': 'Allocate IP',
		'UNALLOCATED': 'Unallocated',
		'EXTERNAL_NETWORK': 'External Network',
		'CANCEL': 'Cancel',
		'SAVE': 'Save',
		'NO_NETWORKS': 'No networks',
		'MANAGE_WIDGETS': 'Manage Widgets',
		'AVAILABLE_WIDGETS': 'Available Widgets',
		'ADD': "Add"
	});
	
	$translateProvider.preferredLanguage('en');
}]);