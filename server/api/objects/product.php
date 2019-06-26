<?php
class Product
{

  // database connection and table name
  private $conn;
  private $table_name = "products";

  // object properties
  public $id;
  public $name;
  public $description;
  public $price;
  public $category_id;
  public $created;
  public $category_name;

  // constructor with $db as database connection
  public function __construct($db)
  {
    $this->conn = $db;
  }

  public function read()
  {
    $query = "SELECT * FROM " . $this->table_name . " ";

    // prepare query statement

    $stmt = $this->conn->prepare($query);

    // execute query
    $stmt->execute();

    // print $stmt->rowCount();

    return $stmt;
  }
}
