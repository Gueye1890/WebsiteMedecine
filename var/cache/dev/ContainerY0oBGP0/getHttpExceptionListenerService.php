<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private 'http_exception_listener' shared service.

include_once $this->targetDirs[3].'/vendor/symfony/http-kernel/EventListener/ExceptionListener.php';

return $this->privates['http_exception_listener'] = new \Symfony\Component\HttpKernel\EventListener\ExceptionListener(NULL, ($this->privates['monolog.logger.request'] ?? $this->getMonolog_Logger_RequestService()), true, 'UTF-8');
