<?php
	function to_send_mail($mail,$to,$subject,$body){
		ini_set("magic_quotes_runtime",0);
		try {
		$mail->IsSMTP();
		$mail->CharSet =C('MAIL_CHARSET'); 
		$mail->SMTPAuth = true; 
		$mail->Port = C('MAIL_PORT'); 
		$mail->Host = C('MAIL_HOST'); 
		$mail->Username = C('MAIL_USER'); 
		$mail->Password = C('MAIL_PASS'); 
		$mail->AddReplyTo(C('MAIL_USER'),C('MAIL_COM_NAME'));
		$mail->From = C('MAIL_USER');
		$mail->FromName = C('MAIL_COM_NAME');
		$mail->AddAddress($to);
		$mail->Subject = $subject;
		$mail->Body = $body;
		$mail->AltBody = C('MAIL_ALT'); 
		$mail->WordWrap = C('MAIL_WORDWRAP'); 
		//$mail->AddAttachment("1.gif"); 
		$mail->IsHTML(true); 
		$mail->Send();
		return true;
		} catch (phpmailerException $e) {
		return $e->errorMessage();
		}
	}
