<?php

class Prueba extends CI_Controller {

	public function view($page = 'home')
	{
		
	if ( ! file_exists('application/views/Flickr/'.$page.'.php'))
	{
	
		show_404();
	}
	
	
	$this->load->helper('url');
	$data['title'] = 'Prueba flickr';
	
	$this->load->view('Template/Cabezera', $data);
	$this->load->view('Flickr/'.$page);
	$this->load->view('Template/Pie');

	}
}
