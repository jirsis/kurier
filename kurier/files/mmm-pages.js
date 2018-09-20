        {
            module: "MMM-pages",
            config: {
                rotationTime: 10000,
                excludes: [
                        "updatenotification",
                        "clock",
                        "alert",
                        "JIR-calendar",
                        "emt",
                        "MMM-page-indicator",
                        "MMM-ImageSlideshow",
                        "MMM-AirQuality",
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