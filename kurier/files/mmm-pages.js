        {
            module: "MMM-pages",
            config: {
                rotationTime: 10000,
                excludes: [
                        "alert",
                        "alexia-cao",
                        "clock",
                        "JIR-calendar",
                        "JIR-tarifa-luz",
                        "kmg",
                        "MMM-AirQuality",
                        "MMM-page-indicator",
                        "MMM-ImageSlideshow",
                        "updatenotification",
                        
                        
                ],
                modules: [
                   ["currentweather-es", "weatherforecast-es"],
                   ["currentweather-pl", "weatherforecast-pl"],
                   ["currentweather-uy", "weatherforecast-uy"],
                   ["currentweather-aoiz", "weatherforecast-aoiz"],
                   ["currentweather-uk", "weatherforecast-uk"],
                ],
            }
          },