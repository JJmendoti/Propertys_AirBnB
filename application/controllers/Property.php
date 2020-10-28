<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Property extends CI_Controller
{

	public function index()
	{
		$result = array('properties' => $this->UsersModel->listProperties());
		$this->load->view('layouts/header');
		$this->load->view('property', $result);
		$this->load->view('layouts/footer');
	}

	public function addPropertys()
	{
		//$result = array('createproperties'=> $this->UsersModel->addproperty());
		$this->load->view('layouts/header');
		$this->load->view('addProperty');
		$this->load->view('layouts/footer');
	}

	public function updateProperty()
	{
		$id = $_GET['id'];
		$property = $this->UsersModel->getPropertiesForId($id);
		$ListProperty = array('property' => $property);
		$this->load->view('layouts/header');
		$this->load->view('updateProperty', $ListProperty);
		$this->load->view('layouts/footer');
	}


	public function getProperty()
	{
		$result = array('properties' => $this->UsersModel->getSortedProperties());
		$this->load->view('layouts/header');
		$this->load->view('getProperty', $result);
		$this->load->view('layouts/footer');
	}

	public function getdUsers()
	{
		$id = $_GET['id_user'];
		$result = array('properties' => $this->UsersModel->getSortedUserProperties($id));
		$this->load->view('layouts/header');
		$this->load->view('getdUsers', $result);
		$this->load->view('layouts/footer');
		// $redirect =base_url().'Property/';
		// header("location: $redirect");
	}


	public function listPriceUser()
	{

		$this->load->view('layouts/header');
		$this->load->view('listPriceUser');
		$this->load->view('layouts/footer');
	}
}
