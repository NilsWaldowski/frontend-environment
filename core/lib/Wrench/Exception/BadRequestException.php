<?php

namespace Wrench\Exception;

use Wrench\Protocol\Protocol;
use Wrench\Exception\HandshakeException;

class BadRequestException extends HandshakeException {
	/**
	 * @param string $message
	 * @param int $code
	 * @param Exception $previous
	 */
	public function __construct($message = NULL, $code = NULL, $previous = NULL) {
		if ($code == NULL) {
			$code = Protocol::HTTP_BAD_REQUEST;
		}
		parent::__construct($message, $code, $previous);
	}
}