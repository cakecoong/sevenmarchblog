<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package sevenmarch
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}

?>



<aside id="secondary" class="widget-area <?= wp_is_mobile() ? "sidebar-popup" : "" ?>"  >
<?php if(wp_is_mobile()) : ?>
<button class='close'>X</button>
<section id="mainmenu" class="widget">
		<h2 class="widget-title">Menu</h2>
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'menu-1',
						'menu_id'        => 'primary-menu',
					)
				);
		?>
		</section>
<?php endif; ?>
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
</aside><!-- #secondary -->
