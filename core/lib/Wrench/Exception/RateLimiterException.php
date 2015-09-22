<?php
namespace Wrench\Exception;

use Wrench\Exception\Exception as WrenchException;

class RateLimiterException extends WrenchException {
	/**
	 * @param string $message
	 * @param int $code
	 * @param Exception $previous
	 */
	public function __construct($message = NULL, $code = NULL, $previous = NULL) {
		if ($code == NULL) {
			$code = Protocol::CLOSE_GOING_AWAY;
		}
		parent::__construct($message, $code, $previous);
	}
}
