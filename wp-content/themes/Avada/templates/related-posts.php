<?php
/**
 * Related-posts template.
 *
 * @author     ThemeFusion
 * @copyright  (c) Copyright by ThemeFusion
 * @link       https://avada.com
 * @package    Avada
 * @subpackage Core
 */

// Do not allow directly accessing this file.
if ( ! defined( 'ABSPATH' ) ) {
	exit( 'Direct script access denied.' );
}
?>
<section class="related-posts single-related-posts">
	<?php
	$title_size = ( false === avada_is_page_title_bar_enabled( get_the_ID() ) ? '2' : '3' );
	Avada()->template->title_template( $main_heading, $title_size );
	?>

	<?php
	/**
	 * Get the correct image size.
	 */
	$featured_image_size = ( 'cropped' === Avada()->settings->get( 'related_posts_image_size' ) ) ? 'fixed' : 'full';
	$data_image_size     = ( 'cropped' === Avada()->settings->get( 'related_posts_image_size' ) ) ? 'fixed' : 'auto';
	?>

	<?php
	/**
	 * Set the meta content variable.
	 */
	$data_meta_content = ( 'title_on_rollover' === Avada()->settings->get( 'related_posts_layout' ) ) ? 'no' : 'yes';

	$additional_carousel_class = '';
	if ( 'title_below_image' === Avada()->settings->get( 'related_posts_layout' ) ) {
		$additional_carousel_class = ' fusion-carousel-title-below-image';
	}
	?>

	<?php
	/**
	 * Set the autoplay variable.
	 */
	$data_autoplay = ( Avada()->settings->get( 'related_posts_autoplay' ) ) ? 'yes' : 'no';
	?>

	<?php
	/**
	 * Set the touch scroll variable.
	 */
	$data_swipe = ( Avada()->settings->get( 'related_posts_swipe' ) ) ? 'yes' : 'no';
	?>
	<?php
	$carousel_item_css = '';
	$columns           = (int) Avada()->settings->get( 'related_posts_columns' );
	$column_spacing    = (int) Avada()->settings->get( 'related_posts_column_spacing' );

	if ( count( $related_posts->posts ) < $columns ) {
		$carousel_item_css = ( Avada()->layout->get_content_width() - $column_spacing * ( $columns - 1 ) ) / $columns;
		$carousel_item_css = ' style="max-width: ' . esc_attr( $carousel_item_css ) . 'px;"';
	}
	?>
	<?php $related_posts_swipe_items = Avada()->settings->get( 'related_posts_swipe_items' ); ?>
	<?php $related_posts_swipe_items = ( 0 == $related_posts_swipe_items ) ? '' : $related_posts_swipe_items; // phpcs:ignore WordPress.PHP.StrictComparisons.LooseComparison ?>
	<div class="awb-carousel awb-swiper awb-swiper-carousel<?php echo esc_attr( $additional_carousel_class ); ?>" data-imagesize="<?php echo esc_attr( $data_image_size ); ?>" data-metacontent="<?php echo esc_attr( $data_meta_content ); ?>" data-autoplay="<?php echo esc_attr( $data_autoplay ); ?>" data-touchscroll="<?php echo esc_attr( $data_swipe ); ?>" data-columns="<?php echo esc_attr( $columns ); ?>" data-itemmargin="<?php echo esc_attr( $column_spacing . 'px' ); ?>" data-itemwidth="180" data-scrollitems="<?php echo esc_attr( $related_posts_swipe_items ); ?>">
		<div class="swiper-wrapper">
			<?php
			/**
			 * Loop through related posts.
			 */
			?>
			<?php while ( $related_posts->have_posts() ) : ?>
				<?php $related_posts->the_post(); ?>
				<?php $post_id = get_the_ID(); // phpcs:ignore WordPress.WP.GlobalVariablesOverride ?>
				<div class="swiper-slide"<?php echo $carousel_item_css; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
					<div class="fusion-carousel-item-wrapper">
						<?php
						if ( 'title_on_rollover' === Avada()->settings->get( 'related_posts_layout' ) ) {
							$display_post_title = 'default';
						} else {
							$display_post_title = 'disable';
						}
						if ( 'auto' === $data_image_size ) {
							Avada()->images->set_grid_image_meta(
								[
									'layout'  => 'related-posts',
									'columns' => $columns,
								]
							);
						}
						echo fusion_render_first_featured_image_markup( $post_id, $featured_image_size, get_permalink( $post_id ), true, false, false, 'disable', $display_post_title, 'related' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
						Avada()->images->set_grid_image_meta( [] );
						?>
						<?php if ( 'title_below_image' === Avada()->settings->get( 'related_posts_layout' ) ) : // Title on rollover layout. ?>
							<?php
							/**
							 * Get the post title.
							 */
							?>
							<h4 class="fusion-carousel-title">
								<a class="fusion-related-posts-title-link" href="<?php echo esc_url_raw( get_permalink( get_the_ID() ) ); ?>" target="_self" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a>
							</h4>

							<div class="fusion-carousel-meta">
								<?php
								$date_format = Avada()->settings->get( 'date_format' );
								$date_format = $date_format ? $date_format : get_option( 'date_format' );
								?>

								<span class="fusion-date"><?php echo esc_attr( get_the_time( $date_format, $post_id ) ); ?></span>

								<?php if ( comments_open( $post_id ) ) : ?>
									<span class="fusion-inline-sep">|</span>
									<span><?php comments_popup_link( __( '0 Comments', 'Avada' ), __( '1 Comment', 'Avada' ), __( '% Comments', 'Avada' ) ); ?></span>
								<?php endif; ?>
							</div><!-- fusion-carousel-meta -->
						<?php endif; ?>
					</div><!-- fusion-carousel-item-wrapper -->
				</div>
			<?php endwhile; ?>
		</div><!-- swiper-wrapper -->
		<?php
		/**
		 * Add navigation if needed.
		 */
		?>
		<?php
		if ( Avada()->settings->get( 'related_posts_navigation' ) ) {
			echo '<div class="awb-swiper-button awb-swiper-button-prev"><i class="awb-icon-angle-left"></i></div>';
			echo '<div class="awb-swiper-button awb-swiper-button-next"><i class="awb-icon-angle-right"></i></div>';
		}
		?>
	</div><!-- fusion-carousel -->
</section><!-- related-posts -->

<?php
wp_reset_postdata();
