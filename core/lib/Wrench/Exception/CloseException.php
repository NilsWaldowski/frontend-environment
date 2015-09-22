<?php

namespace Wrench\Exception;

use Wrench\Protocol\Protocol;
use Wrench\Exception\Exception as WrenchException;

/**
 * Close connection exception
 */
class CloseException extends WrenchException {
	/**
	 * @param string $message
	 * @param int $code
	 * @param Exception $previous
	 */
	public function __construct($message = NULL, $code = NULL, $previous = NULL) {
		if ($code == NULL) {
			$code = Protocol::CLOSE_UNEXPECTED;
		}
		parent::__construct($message, $code, $previous);
	}
}