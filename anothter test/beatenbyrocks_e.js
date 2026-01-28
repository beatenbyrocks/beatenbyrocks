/*--- Avanquest WebEasy External Script ---*/

/* -------------------------------------------- */
/* Embed Video from YouTube.com                 */
/* -------------------------------------------- */

function weAddYouTubeVideo(vid, dmx, dmy, ply) 
{ 
  var url = 'http://www.youtube.com/v/' + vid;
  if (ply) url += '&autoplay='+ply;
  document.writeln( 
    '<object width="' + dmx + '" height="' + dmy + '">' + 
    '  <param name="movie" value="' + url + '">' + 
    '  <param name="wmode" value="transparent">' + 
    '    <embed src="' + url + '"' + 
    '     type="application/x-shockwave-flash" wmode="transparent"' + 
    '     width="' + dmx + '" height="' + dmy + '"></embed>' + 
    '</object>'); 
} 





/*--- EndOfFile ---*/
