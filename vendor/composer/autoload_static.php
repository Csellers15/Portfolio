<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit43f5d0b9134c0cbec8c1d7cd4a8df635
{
    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInit43f5d0b9134c0cbec8c1d7cd4a8df635::$classMap;

        }, null, ClassLoader::class);
    }
}
