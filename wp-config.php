<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'db_ppid' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '4Ch+?lgy,O!X}E;)(+S[V}?AS54OB?OlYd#(kLW{&73<Tj^L2+rbz=5<$ko8qm31' );
define( 'SECURE_AUTH_KEY',  ']e|Al{h(hIT9;3jvi$jj)^t0iH:ZmU7YZsupBZtb4x; <HnUts*8GSb2X6|YvPZ3' );
define( 'LOGGED_IN_KEY',    'nL@23!>1[&m26yN|1R0WHmnd2Gsw)h~cV8kTFu~8+FbY?siY 6WVF~S&:aHtYx_#' );
define( 'NONCE_KEY',        'yr:L[3/&=/R$GXv[]4=K0}hoJ[sq HK5PL)|Ifbr9ii`g**#n~,{fD&1{<s>M0WH' );
define( 'AUTH_SALT',        'DUuge-tvCL>M{]X_=B4s~fijHPC18]HbyJesm})=`gUKm.RQ?Qd v jgJPQ(w!`r' );
define( 'SECURE_AUTH_SALT', 'lE&eAevYb`ZP*T`^h8[{s!@N]XNDXh?r!SEL>zpRANrE-PDTbR_d ?7z6;xWS|W$' );
define( 'LOGGED_IN_SALT',   'Fnao`W[S@O/ajA=I>JD%xC]~^VS9BI4uU84IL=;@^PM$ede/qe3EICx_WF8S-$J8' );
define( 'NONCE_SALT',       'o; .M2|4a3ZG./uIf6_8`+I-LZ+e&gs;]N?OB*QNNG3HG0[9[gz8tW,JDy5:2id@' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'ppid_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
