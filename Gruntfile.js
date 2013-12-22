module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Convert LESS into CSS:
    less: {
      options: {
        concat: false
      },
      // Process Android LESS file into CSS:
      android: {
        files: { '<%= pkg.project_path %>chui/chui-android-<%= pkg.version %>.css': 'src/themes/android/main.less'}
      },
      // Process iOS LESS file into CSS:
      ios: {
        files: { '<%= pkg.project_path %>chui/chui-ios-<%= pkg.version %>.css': 'src/themes/ios/main.less'}
      },
      // Process Windows LESS file into CSS:
      win: {
        files: { '<%= pkg.project_path %>chui/chui-win-<%= pkg.version %>.css': 'src/themes/windows/main.less'}
      }
    },
    // Concat JavaScript files and Examples:
    concat: {
      android: {
        options: {
          banner: '/*\n    pO\\\n   6  /\\\n     /OO\\\n    /OOOO\\\n  /OOOOOOOO\\\n ((OOOOOOOO))\n  \\:~=++=~:/\n\n<%= pkg.title %>\nChUI.Android.css\nCopyright <%= grunt.template.today("yyyy") %> Sourcebits www.sourcebits.com\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/\n'
        },
        src: ['<%= pkg.project_path %>chui/chui-android-<%= pkg.version %>.css'],
        dest: '<%= pkg.project_path %>chui/chui-android-<%= pkg.version %>.css'

      },
      ios: {
        options: {
          banner: '/*\n    pO\\\n   6  /\\\n     /OO\\\n    /OOOO\\\n  /OOOOOOOO\\\n ((OOOOOOOO))\n  \\:~=++=~:/\n\n<%= pkg.title %>\nChUI.iOS.css\nCopyright <%= grunt.template.today("yyyy") %> Sourcebits www.sourcebits.com\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/\n'
        },
        src: ['<%= pkg.project_path %>chui/chui-ios-<%= pkg.version %>.css'],
        dest: '<%= pkg.project_path %>chui/chui-ios-<%= pkg.version %>.css'
      },
      win: {
        options: {
          banner: '/*\n    pO\\\n   6  /\\\n     /OO\\\n    /OOOO\\\n  /OOOOOOOO\\\n ((OOOOOOOO))\n  \\:~=++=~:/\n\n<%= pkg.title %>\nChUI.Win.css\nCopyright <%= grunt.template.today("yyyy") %> Sourcebits www.sourcebits.com\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/\n'
        },
         src: ['<%= pkg.project_path %>chui/chui-win-<%= pkg.version %>.css'],
        dest: '<%= pkg.project_path %>chui/chui-win-<%= pkg.version %>.css'
      },
      // Concat the ChUIJS files together:
      chui: {
        options: {
          banner: '/*\n    pO\\\n   6  /\\\n     /OO\\\n    /OOOO\\\n  /OOOOOOOO\\\n ((OOOOOOOO))\n  \\:~=++=~:/\n\n<%= pkg.title %>\nChUI.js\nCopyright <%= grunt.template.today("yyyy") %> Sourcebits www.sourcebits.com\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/\n'
        },
        src: ['src/chui/utils.js', 'src/chui/events.js', 'src/chui/detectors.js', 'src/chui/layout.js', 'src/chui/desktop.js', 'src/chui/layout.js', 'src/chui/gestures.js', 'src/chui/pubsub.js', 'src/chui/navigation.js', 'src/chui/buttons.js', 'src/chui/blockui.js', 'src/chui/center.js', 'src/chui/busy.js', 'src/chui/popup.js', 'src/chui/popover.js', 'src/chui/segmented.js', 'src/chui/togglePanel.js', 'src/chui/paging.js', 'src/chui/deletables.js', 'src/chui/select.js', 'src/chui/sheet.js', 'src/chui/slideout.js', 'src/chui/stepper.js', 'src/chui/switch.js', 'src/chui/tabbar.js', 'src/chui/templates.js'],
        dest: '<%= pkg.project_path %>chui/chui-<%= pkg.version %>.js'
      },
      // Concat Android examples:
      example_android: {
        options: {
          banner: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <meta name="apple-mobile-web-app-capable" content="yes">\n  <meta name="mobile-web-app-capable" content="yes">\n  <meta name="msapplication-tap-highlight" content="no">\n  <title>ChocolateChip-UI Android</title>\n  <link rel="stylesheet" href="../chui/chui-android-<%= pkg.version %>.css">\n  <script src="<%= pkg.jquery.url %>"></script>\n  <script src="../chui/chui-<%= pkg.version %>.js"></script>\n'
        },
        files: [{
          expand: true,
          cwd: 'src/examples/',
          src: ['**/*'],
          dest: '<%= pkg.project_path %>examples-android/'
        }]
      },
      // Concat iOS examples:
      example_ios: {
        options: {
          banner: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <meta name="apple-mobile-web-app-capable" content="yes">\n  <meta name="mobile-web-app-capable" content="yes">\n  <meta name="msapplication-tap-highlight" content="no">\n  <title>ChocolateChip-UI iOS</title>\n  <link rel="stylesheet" href="../chui/chui-ios-<%= pkg.version %>.css">\n  <script src="<%= pkg.jquery.url %>"></script>\n  <script src="../chui/chui-<%= pkg.version %>.js"></script>\n'
        },
        files: [{
          expand: true,
          cwd: 'src/examples/',
          src: ['**/*'],
          dest: '<%= pkg.project_path %>examples-ios/'
        }]
      },
      // Concat iOS examples:
      example_win: {
        options: {
          banner: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <meta name="apple-mobile-web-app-capable" content="yes">\n  <meta name="mobile-web-app-capable" content="yes">\n  <meta name="msapplication-tap-highlight" content="no">\n  <title>ChocolateChip-UI Win</title>\n  <link rel="stylesheet" href="../chui/chui-win-<%= pkg.version %>.css">\n  <script src="<%= pkg.jquery.url %>"></script>\n  <script src="../chui/chui-<%= pkg.version %>.js"></script>\n'
        },
        files: [{
          expand: true,
          cwd: 'src/examples/',
          src: ['**/*'],
          dest: '<%= pkg.project_path %>examples-win/'
        }]
      },
      // Concat Android version of demo:
      demo_android: {
        options: {
          banner: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <meta name="apple-mobile-web-app-capable" content="yes">\n  <meta name="mobile-web-app-capable" content="yes">\n  <meta name="msapplication-tap-highlight" content="no">\n  <title>ChocolateChip-UI Demo Android</title>\n  <link rel="stylesheet" href="../chui/chui-android-<%= pkg.version %>.css">\n  <script src="<%= pkg.jquery.url %>"></script>\n  <script src="../chui/chui-<%= pkg.version %>.js"></script>\n'
        },
        files: {
          '<%= pkg.project_path %>demo/index-android.html': ['src/demo/index.html']
        }
      },
      // Concat iOS version of demo:
      demo_ios: {
        options: {
          banner: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <meta name="apple-mobile-web-app-capable" content="yes">\n  <meta name="mobile-web-app-capable" content="yes">\n  <meta name="msapplication-tap-highlight" content="no">\n  <title>ChocolateChip-UI Demo iOS</title>\n  <link rel="stylesheet" href="../chui/chui-android-<%= pkg.version %>.css">\n  <script src="<%= pkg.jquery.url %>"></script>\n  <script src="../chui/chui-<%= pkg.version %>.js"></script>\n'
        },
        files: {
          '<%= pkg.project_path %>demo/index-ios.html': ['src/demo/index.html']
        }
      },
      // Concat Windows Phone 8 version of demo:
      demo_win: {
        options: {
          banner: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <meta name="apple-mobile-web-app-capable" content="yes">\n  <meta name="mobile-web-app-capable" content="yes">\n  <meta name="msapplication-tap-highlight" content="no">\n  <title>ChocolateChip-UI Demo Windows</title>\n  <link rel="stylesheet" href="../chui/chui-android-<%= pkg.version %>.css">\n  <script src="<%= pkg.jquery.url %>"></script>\n  <script src="../chui/chui-<%= pkg.version %>.js"></script>\n'
        },
        files: {
          '<%= pkg.project_path %>demo/index-win.html': ['src/demo/index.html']
        }
      }
    },
    cssmin: {
      android: {
        options: {
          banner: '/*\nChocolateChip-UI\nChUI-Android.css\nCopyright <%= grunt.template.today("yyyy") %> Sourcebits www.sourcebits.com\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/'
        },
        files: {'<%= pkg.project_path %>chui/chui-android-<%= pkg.version %>.min.css': '<%= pkg.project_path %>chui/chui-android-<%= pkg.version %>.css'}
      },
      ios: {
        options: {
          banner: '/*\nChocolateChip-UI\nChUI-iOS.css\nCopyright <%= grunt.template.today("yyyy") %> Sourcebits www.sourcebits.com\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/'
        },
        files: {'<%= pkg.project_path %>chui/chui-ios-<%= pkg.version %>.min.css': '<%= pkg.project_path %>chui/chui-ios-<%= pkg.version %>.css'}
      },
      win: {
        options: {
          banner: '/*\nChocolateChip-UI\nChUI-Win.css\nCopyright <%= grunt.template.today("yyyy") %> Sourcebits www.sourcebits.com\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/'
        },
        files: {'<%= pkg.project_path %>chui/chui-win-<%= pkg.version %>.min.css': '<%= pkg.project_path %>chui/chui-win-<%= pkg.version %>.css'}
      }
    },
    // Copy files out of src directory:
    copy: {
      // Copy out images:
      images: {
        files: [{ 
          expand: true,
          cwd: 'src/images/', 
          src: ['**/*.{png,jpg,svg}'], 
          dest:'<%= pkg.project_path %>images/' 
        }]
      },
      // Copy out data files:
      data: {
        files: [{
          expand: true,
          cwd: 'src/data/',
          src: ['**/*'],
          dest: '<%= pkg.project_path %>data/'
        }]
      },
      // Copy out index for Android examples:
      index_android: {
        files: [
         {
          expand: true, 
          cwd: 'src/', 
          src: ['index.html'], 
          dest: '<%= pkg.project_path %>examples-android/'
         }
        ]
      },
      // Copy out index for iOS examples:
      index_ios : {
        files: [
         {
          expand: true, 
          cwd: 'src/', 
          src: ['index.html'], 
          dest: '<%= pkg.project_path %>examples-ios/'
         }
        ],
      },
      // Copy out index for Windows Phone 8 examples:
      index_win:  {
        files: [
         {
          expand: true, 
          cwd: 'src/', 
          src: ['index.html'], 
          dest: '<%= pkg.project_path %>examples-win/'
         }
        ]
      }
    },
    // Run JsHint on JavaScript files:
    // Rules to follow for linting:
    jshint: {
      options: {
        curly: false,
        browser: true,
        eqeqeq: true,
        forin: false,
        immed: false,
        expr: false,
        indent: false,
        noempty: true,
        plusplus: false,
        unused: false,
        boss: true,
        evil: true,
        laxbreak: true,
        multistr: true,
        scripturl: true,
        '-W030': true,
        '-W083': false
      },
      chui: ['<%= pkg.project_path %>chui/chui-<%= pkg.version %>.js']
    },
    // Minify JavaScript files:
    uglify: {
      options: {
        preserveComments: false,
        sourceMap: "<%= pkg.project_path %>chui/chui-<%= pkg.version %>.min.map",
        sourceMappingURL: "chui-<%= pkg.version %>.min.map",
        report: "min",
        beautify: {
          ascii_only: true
        },
        banner: '/*\nChocolateChip-UI\nChUI.js\nCopyright <%= grunt.template.today("yyyy") %> Sourcebits www.sourcebits.com\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/\n',
        compress: {
          hoist_funs: false,
          loops: false,
          unused: false
        }
      },
      chui: {
        files: {
          '<%= pkg.project_path %>chui/chui-<%= pkg.version %>.min.js': '<%= pkg.project_path %>chui/chui-<%= pkg.version %>.js' 
        }
      }
    }
    
  });

  // Tasks:
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default build:
  grunt.registerTask('default', ['less', 'concat', 'cssmin', 'copy', 'jshint', 'uglify']);

  // Build all three themes with ChUI.js:
  grunt.registerTask('chui', ['concat:chui', 'jshint', 'uglify', 'less', 'concat:android', 'concat:ios', 'concat:win', 'cssmin']);

  // Build just ChUI.js:
  grunt.registerTask('chuijs', ['concat:chui', 'jshint', 'uglify']);

  // Build Android theme:
  grunt.registerTask('android', ['less:android', 'concat:android', 'cssmin:android']);

  // Build iOS theme:
  grunt.registerTask('ios', ['less:ios', 'concat:ios', 'cssmin:ios']);

  // Build Windows theme:
  grunt.registerTask('win', ['less:win', 'concat:win', 'cssmin:win']);

  // Build all three themes:
  grunt.registerTask('themes', ['less', 'concat:android', 'concat:ios', 'concat:win', 'cssmin']);

  // Build Android examples:
  grunt.registerTask('android_examples', ['less:android', 'concat:android', 'concat:chui', 'concat:example_android', 'concat:demo_android', 'cssmin:android', 'copy:images', 'copy:data', 'copy:index_android', 'jshint', 'uglify']);

  // Build iOS examples:
  grunt.registerTask('ios_examples', ['less:ios', 'concat:ios', 'concat:chui', 'concat:example_ios', 'concat:demo_android', 'cssmin:ios', 'copy:images', 'copy:data', 'copy:index_ios', 'jshint', 'uglify']);

  // Build Windows Phone 8 examples:
  grunt.registerTask('win_examples', ['less:win', 'concat:win', 'concat:chui', 'concat:example_win', 'concat:demo_android', 'cssmin:win', 'copy:images', 'copy:data', 'copy:index_win', 'jshint', 'uglify']);
};