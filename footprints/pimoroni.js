module.exports = {
  params: {
    VCC: {type:'net', value: 'VCC'},
    SDA: {type:'net', value: 'P2' },
    SCL: {type:'net', value: 'P3' },
    INT: {type:'net', value: 'INT' }, // usually best not to connect this pin
    GND: {type:'net', value: 'GND'},
  },
  body: p => {
    return `
      (module pimoroni_trackball (layer F.Cu) (tedit 5D20B36F)
      ${p.at /* parametric position */}
        (descr "Pimoroni I2C trackball breakout")
        (tags "Through hole pin header THT 1x05 2.54mm single row")

        ${''/* pins outline */}

        (fp_line (start -1.8 -1.8) (end -1.8 11.95) (layer F.CrtYd) (width 0.05))
        (fp_line (start -1.8 11.95) (end 1.8 11.95) (layer F.CrtYd) (width 0.05))
        (fp_line (start 1.8 11.95) (end 1.8 -1.8) (layer F.CrtYd) (width 0.05))
        (fp_line (start 1.8 -1.8) (end -1.8 -1.8) (layer F.CrtYd) (width 0.05))
        (fp_line (start -1.5 -2.6) (end -1.5 12.5) (layer F.SilkS) (width 0.12))
        (fp_line (start -1.5 12.5) (end 4.5 12.5) (layer F.SilkS) (width 0.12))
        (fp_line (start 4.5 12.5) (end 4.5 17.5) (layer F.SilkS) (width 0.12))
        (fp_line (start 4.5 17.5) (end 20.5 17.5) (layer F.SilkS) (width 0.12))
        (fp_line (start -1.5 -2.6) (end 4.5 -2.6) (layer F.SilkS) (width 0.12))
        (fp_line (start 4.5 -7.6) (end 20.5 -7.6) (layer F.SilkS) (width 0.12))
        (fp_line (start 4.5 -2.6) (end 4.5 -7.6) (layer F.SilkS) (width 0.12))
        (fp_line (start 20.5 17.5) (end 20.5 -7.6) (layer F.SilkS) (width 0.12))

        ${''/* pins outline back */}

        (fp_line (start -1.8 -1.8) (end -1.8 11.95) (layer B.CrtYd) (width 0.05))
        (fp_line (start -1.8 11.95) (end 1.8 11.95) (layer B.CrtYd) (width 0.05))
        (fp_line (start 1.8 11.95) (end 1.8 -1.8) (layer B.CrtYd) (width 0.05))
        (fp_line (start 1.8 -1.8) (end -1.8 -1.8) (layer B.CrtYd) (width 0.05))
        (fp_line (start -1.5 -2.6) (end -1.5 12.5) (layer B.SilkS) (width 0.12))
        (fp_line (start -1.5 12.5) (end 4.5 12.5) (layer B.SilkS) (width 0.12))
        (fp_line (start 4.5 12.5) (end 4.5 17.5) (layer B.SilkS) (width 0.12))
        (fp_line (start 4.5 17.5) (end 20.5 17.5) (layer B.SilkS) (width 0.12))
        (fp_line (start -1.5 -2.6) (end 4.5 -2.6) (layer B.SilkS) (width 0.12))
        (fp_line (start 4.5 -7.6) (end 20.5 -7.6) (layer B.SilkS) (width 0.12))
        (fp_line (start 4.5 -2.6) (end 4.5 -7.6) (layer B.SilkS) (width 0.12))
        (fp_line (start 20.5 17.5) (end 20.5 -7.6) (layer B.SilkS) (width 0.12))

        ${''/* mounting holes */}
        (pad 1 np_thru_hole circle (at 7.05 14.7) (size 2.5 2.5) (drill 2.5) (layers *.Cu *.Mask))
        (pad 2 np_thru_hole circle (at 17.95 14.7) (size 2.5 2.5) (drill 2.5) (layers *.Cu *.Mask))
        (pad 3 np_thru_hole circle (at 17.95 -4.9) (size 2.5 2.5) (drill 2.5) (layers *.Cu *.Mask))
        (pad 4 np_thru_hole circle (at 7.05 -4.9) (size 2.5 2.5) (drill 2.5) (layers *.Cu *.Mask))

        ${''/* pins */}
        (pad 1 thru_hole oval (at 0 0 0) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.VCC.str})
        (pad 2 thru_hole oval (at 0 2.54) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.SDA})
        (pad 3 thru_hole oval (at 0 5.08) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.SCL})
        (pad 4 thru_hole oval (at 0 7.62) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.INT}) 
        (pad 5 thru_hole oval (at 0 10.16) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GND.str})

        ${''/* pin name text */}
        (fp_text user VCC (at 3 0 ${p.r} ) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user SDA (at 3 2.54 ${p.r} ) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user SCL (at 3 5.08 ${p.r} ) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user INT (at 3 7.62 ${p.r} ) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at 3 10.16 ${p.r} ) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))

        ${''/* pin name text back*/}
        (fp_text user GND (at 3 0 ${p.r} ) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))(justify mirror)))
        (fp_text user INT (at 3 2.54 ${p.r} ) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))(justify mirror)))
        (fp_text user SCL (at 3 5.08 ${p.r} ) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))(justify mirror)))
        (fp_text user SDA (at 3 7.62 ${p.r} ) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))(justify mirror)))
        (fp_text user VCC (at 3 10.16 ${p.r} ) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))(justify mirror)))

        (pad "21" smd custom (at 5 0 ${-90 + p.r}) (size 0.1 0.1) (layers "F.Cu" "F.Mask" "F.Paste")
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives
                (gr_poly
                    (pts
                        (xy 0.6 0.4)
                        (xy -0.6 0.4)
                        (xy -0.6 0.2)
                        (xy 0 -0.4)
                        (xy 0.6 0.2)
                    )   
                    (width 0)
                    (fill yes)
                )
            )
            ${p.VCC.str}
        )
        (pad "31" smd custom (at 5 0 ${-90 + p.r}) (size 0.1 0.1) (layers "B.Cu" "B.Mask" "B.Paste")
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives
                (gr_poly
                    (pts
                        (xy 0.6 0.4)
                        (xy -0.6 0.4)
                        (xy -0.6 0.2)
                        (xy 0 -0.4)
                        (xy 0.6 0.2)
                    )
                    (width 0)
                    (fill yes)
                )
            )
            ${p.GND.str}
        )
        (pad "1" smd custom (at 6 0 ${-90 + p.r}) (size 1.2 0.5) (layers "F.Cu" "F.Mask" "F.Paste") ${p.VCC}
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives
                (gr_poly
                    (pts
                        (xy 0.6 0)
                        (xy -0.6 0)
                        (xy -0.6 1)
                        (xy 0 0.4)
                        (xy 0.6 1)
                    )
                    (width 0)
                    (fill yes)
                )
            )
        )
        (pad "1" smd custom (at 6 0 ${-90 + p.r}) (size 1.2 0.5) (layers "B.Cu" "B.Mask" "B.Paste") ${p.GND}
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives
                (gr_poly
                    (pts
                        (xy 0.6 0)
                        (xy -0.6 0)
                        (xy -0.6 1)
                        (xy 0 0.4)
                        (xy 0.6 1)
                    )
                    (width 0)
                    (fill yes)
                )
            )
        )
      )
    `
  }
}
