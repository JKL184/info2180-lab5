<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$country=filter_input(INPUT_GET,"country",FILTER_SANITIZE_STRING); 
$context = filter_input(INPUT_GET,"context",FILTER_SANITIZE_STRING); 
$stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

$stmt = $conn->query("SELECT c.id,c.district, c.name as city, c.country_code, cs.name as
country, c.population FROM cities c join countries cs on
c.country_code = cs.code WHERE cs.name LIKE '%$country%'");
$cityresults = $stmt->fetchAll(PDO::FETCH_ASSOC);

if($context!="cities"):
?>
<table>
  <thead>
      <tr>
          <th>Name</th>
          <th>Continent</th>
          <th>Independence</th>
          <th>Head of State</th>
      </tr>
  </thead>
  <tbody>
      <?php foreach ($results as $row): ?>
      <tr>
          <td><?= $row['name']; ?></td>
          <td><?= $row['continent']; ?></td>
          <td><?= $row['independence_year']; ?></td>
          <td><?= $row['head_of_state']; ?></td>
      </tr>
      <?php endforeach; ?>
  </tbody>
</table>

<?php else : ?>
  <table>
  <thead>
      <tr>
      <th>City Name</th>
      <th>District</th>
     <th>Population</th>
      </tr>
  </thead>
  <tbody>
      <?php foreach ($cityresults as $row): ?>
      <tr>
      <td> <?= $row['city']?></td>
      <td> <?=$row['district']?></td>
      <td> <?=$row['population']?></td>
      </tr>
      <?php endforeach; ?>
  </tbody>
</table>
<?php endif; ?>


