<?php
/* looplo.com/modtag.php
   Modtager en krypteret blob. Serveren kan IKKE laese indholdet.
   Kun indehaveren af den private noegle kan dekryptere.
   GET  = selvtest (viser om PHP koerer og hvor der kan skrives)
   POST = modtag blob */

/* ---- KONFIGURATION ----
   AFSENDER skal vaere en postkasse der FINDES paa det domaene serveren hoster (looplo.com).
   Opret fx info@looplo.com hos one.com og saet den ind her. En adresse paa et ANDET domaene
   (fx falkentorp.dk) bliver afvist af udbyderen. MODTAGER maa gerne ligge et andet sted. */
/* AFSENDER: lad staa TOM i foerste omgang - saa saetter serveren selv sin afsender,
   hvilket de fleste udbydere accepterer. Vil du bruge en egen adresse, skal den findes
   som postkasse paa det domaene serveren hoster (fx info@looplo.com). */
define('AFSENDER', '');
define('MODTAGER', 'jacob@falkentorp.dk');
/* HENTETOKEN: kraeves for at laese de krypterede blobs via ?hent=... .
   Indholdet er krypteret i forvejen - token er blot et ekstra laag. Skift den frit. */
define('HENTETOKEN', 'a77015362f937764efb6194dce9ac384');

header('Content-Type: application/json; charset=utf-8');

function blob_dir() {
    $kandidater = array(
        __DIR__ . '/../_blobs',
        __DIR__ . '/_blobs',
    );
    foreach ($kandidater as $d) {
        if (!is_dir($d)) { @mkdir($d, 0700, true); }
        if (is_dir($d) && is_writable($d)) {
            $ht = $d . '/.htaccess';
            if (!file_exists($ht)) {
                @file_put_contents($ht, "Require all denied\nDeny from all\n");
            }
            return $d;
        }
    }
    return null;
}

/* ---- hent krypterede blobs (kraever token) ---- */
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['hent'])) {
    if (!hash_equals(HENTETOKEN, (string)$_GET['hent'])) {
        http_response_code(403);
        header('Content-Type: text/plain; charset=utf-8');
        echo 'forkert token';
        exit;
    }
    $d = blob_dir();
    $f = $d ? $d . '/henvendelser.jsonl' : null;
    header('Content-Type: text/plain; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    echo ($f && is_readable($f)) ? file_get_contents($f) : '';
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $d      = blob_dir();
    $antal  = ($d && is_readable($d . '/henvendelser.jsonl'))
                ? count(file($d . '/henvendelser.jsonl', FILE_SKIP_EMPTY_LINES)) : 0;
    $sidste = ($d && is_readable($d . '/mail.log'))
                ? trim(@file_get_contents($d . '/mail.log')) : 'ingen forsoeg endnu';
    $mailok = (strpos($sidste, 'resultat=ok') !== false);

    header('Content-Type: text/html; charset=utf-8');
    ?><!DOCTYPE html><html lang="da"><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Looplo status</title>
<style>
  :root{--paper:#EEF1EE;--ink:#0F2E36;--soft:#3C5760;--dot:#C2791C;--sage:#8FA9A6;--rule:rgba(15,46,54,.14)}
  *{box-sizing:border-box}
  body{margin:0;background:var(--paper);color:var(--ink);
       font-family:system-ui,-apple-system,"Segoe UI",sans-serif;line-height:1.5}
  .w{max-width:560px;margin:0 auto;padding:34px 22px 60px}
  .brand{display:flex;align-items:center;gap:10px;font-weight:700;font-size:17px;letter-spacing:.02em}
  .dot{width:13px;height:13px;border-radius:50%;background:var(--dot);flex:none}
  h1{font-size:26px;margin:22px 0 26px;font-weight:700}
  .tal{font-size:76px;line-height:1;font-weight:800;letter-spacing:-.03em;margin:0}
  .tal-txt{font-size:19px;color:var(--soft);margin:6px 0 30px}
  .r{display:flex;justify-content:space-between;align-items:center;gap:14px;
     padding:15px 0;border-top:1px solid var(--rule);font-size:19px}
  .r b{font-weight:600}
  .v{color:var(--soft);text-align:right;font-size:18px}
  .ok{color:#2E6B45;font-weight:700}
  .fejl{color:#B23B2E;font-weight:700}
  .note{margin-top:26px;padding:15px 17px;border:1px dashed var(--rule);
        border-radius:11px;font-size:17px;color:var(--soft)}
  code{font-size:16px;background:#fff;padding:2px 6px;border-radius:5px}
</style>
<div class="w">
  <div class="brand"><span class="dot"></span>LOOPLO &middot; status</div>
  <h1>Henvendelser</h1>

  <p class="tal"><?php echo $antal; ?></p>
  <p class="tal-txt">i koen<?php echo $antal === 1 ? '' : ''; ?></p>

  <div class="r"><b>Kan skrive</b>
    <span class="v <?php echo $d ? 'ok' : 'fejl'; ?>"><?php echo $d ? 'ja' : 'NEJ'; ?></span></div>
  <div class="r"><b>Notifikation</b>
    <span class="v <?php echo $mailok ? 'ok' : 'fejl'; ?>"><?php echo $mailok ? 'ok' : 'afvist'; ?></span></div>
  <div class="r"><b>Afsender</b><span class="v"><?php
      if (preg_match('/afsender=(.*?)\s+resultat/', $sidste, $mm)) echo htmlspecialchars(trim($mm[1]));
      else echo AFSENDER === '' ? 'proever flere' : htmlspecialchars(AFSENDER); ?></span></div>
  <div class="r"><b>Sidste forsoeg</b><span class="v"><?php
      echo htmlspecialchars(preg_replace('/\s+afsender=.*/','',$sidste)); ?></span></div>
  <div class="r"><b>PHP</b><span class="v"><?php echo PHP_VERSION; ?></span></div>
  <div class="r"><b>Placering</b><span class="v"><?php
      echo $d ? htmlspecialchars(basename(dirname($d)) . '/' . basename($d)) : '-'; ?></span></div>

  <div class="note">
    Indholdet er krypteret og kan kun laeses med den private noegle.
    Hent <code>henvendelser.jsonl</code> og kor <code>laes_henvendelser.py</code>.
  </div>
</div>
<?php
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(array('ok' => false, 'kode' => 'metode'));
    exit;
}

$raw = file_get_contents('php://input');
if (strlen($raw) > 20000) {
    http_response_code(413);
    echo json_encode(array('ok' => false, 'kode' => 'stor'));
    exit;
}

$d = json_decode($raw, true);
if (!$d || empty($d['ek']) || empty($d['iv']) || empty($d['ct'])) {
    http_response_code(400);
    echo json_encode(array('ok' => false, 'kode' => 'format'));
    exit;
}
foreach (array('ek', 'iv', 'ct') as $k) {
    if (!preg_match('/^[A-Za-z0-9+\/=]+$/', $d[$k])) {
        http_response_code(400);
        echo json_encode(array('ok' => false, 'kode' => 'tegn'));
        exit;
    }
}

$dir = blob_dir();
if ($dir === null) {
    http_response_code(500);
    echo json_encode(array('ok' => false, 'kode' => 'mappe'));
    exit;
}

$f   = $dir . '/henvendelser.jsonl';
$rec = array('tid' => gmdate('c'), 'ek' => $d['ek'], 'iv' => $d['iv'], 'ct' => $d['ct']);

$fh = @fopen($f, 'a');
if (!$fh) {
    http_response_code(500);
    echo json_encode(array('ok' => false, 'kode' => 'skriv'));
    exit;
}
flock($fh, LOCK_EX);
fwrite($fh, json_encode($rec, JSON_UNESCAPED_SLASHES) . "\n");
flock($fh, LOCK_UN);
fclose($fh);
@chmod($f, 0600);

$antal = @count(@file($f, FILE_SKIP_EMPTY_LINES));
$krop  = "Der er modtaget en ny henvendelse via looplo.com.\n\n"
       . "Tidspunkt: " . gmdate('Y-m-d H:i') . " UTC\n"
       . "I alt i koen: " . $antal . "\n\n"
       . "Indholdet er krypteret og fremgaar ikke af denne mail.\n"
       . "Hent henvendelser.jsonl og kor laes_henvendelser.py for at laese den.\n";
/* Proev flere afsender-varianter - foerste der slipper igennem vinder. */
$emne = 'Looplo: ny henvendelse';
$ct   = "Content-Type: text/plain; charset=UTF-8";
$sendt = false; $brugt = '';

$forsoeg = array(
    array('navn' => 'server-standard', 'hoved' => $ct,                                     'env' => null),
    array('navn' => 'info@looplo.com', 'hoved' => "From: Looplo <info@looplo.com>\r\n" . $ct, 'env' => 'info@looplo.com'),
    array('navn' => 'noreply@looplo.com', 'hoved' => "From: Looplo <noreply@looplo.com>\r\n" . $ct, 'env' => 'noreply@looplo.com'),
    array('navn' => MODTAGER,           'hoved' => "From: Looplo <" . MODTAGER . ">\r\n" . $ct, 'env' => MODTAGER),
);
if (AFSENDER !== '') {
    array_unshift($forsoeg, array('navn' => AFSENDER,
        'hoved' => "From: Looplo <" . AFSENDER . ">\r\n" . $ct, 'env' => AFSENDER));
}
foreach ($forsoeg as $f) {
    $ok = $f['env'] === null
        ? @mail(MODTAGER, $emne, $krop, $f['hoved'])
        : @mail(MODTAGER, $emne, $krop, $f['hoved'], '-f' . $f['env']);
    if ($ok) { $sendt = true; $brugt = $f['navn']; break; }
}
if (!$sendt) { $brugt = 'alle afvist'; }

@file_put_contents($dir . '/mail.log',
    gmdate('Y-m-d H:i') . ' UTC  afsender=' . $brugt . '  resultat=' . ($sendt ? 'ok' : 'afvist'));

echo json_encode(array('ok' => true, 'mail' => $sendt ? true : false));
