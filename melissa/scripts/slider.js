 jssor_slider1_starter = function (containerId) {
                var options = {
                    $AutoPlay: true,
                    $ArrowNavigatorOptions: {
                        $Class: $JssorArrowNavigator$,                        
                    },
                    $ThumbnailNavigatorOptions: {
                        $Class: $JssorThumbnailNavigator$,
                        $Cols: 10,
                        $SpacingX: 8,
                        $SpacingY: 8,
                        $Align: 360 ,
						
                    },
					$BulletNavigatorOptions: {
						$Class: $JssorBulletNavigator$,
						$ChanceToShow: 2
					}
                };
                var jssor_slider1 = new $JssorSlider$(containerId, options);
            };