<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerY0oBGP0\srcDevDebugProjectContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerY0oBGP0/srcDevDebugProjectContainer.php') {
    touch(__DIR__.'/ContainerY0oBGP0.legacy');

    return;
}

if (!\class_exists(srcDevDebugProjectContainer::class, false)) {
    \class_alias(\ContainerY0oBGP0\srcDevDebugProjectContainer::class, srcDevDebugProjectContainer::class, false);
}

return new \ContainerY0oBGP0\srcDevDebugProjectContainer(array(
    'container.build_hash' => 'Y0oBGP0',
    'container.build_id' => '9439425f',
    'container.build_time' => 1529430264,
), __DIR__.\DIRECTORY_SEPARATOR.'ContainerY0oBGP0');
