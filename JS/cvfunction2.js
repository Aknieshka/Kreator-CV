function Template2() {
    
    var doc = new jsPDF();

    var telephone = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAESSURBVDhPpdLNK0RRHMbxQ15Dkg0pkbKaWVhQSiYWCuVlzUaRzSSkWKgpS1EkZeEl0oyFP3K+z+93Ts0dupM89ek8d+rce+d3T2hKT1z/lG48oopV/RCzhH1M2NUvacMzirF/YhCK1jlcQTcfQCZDuPZqmcKd17CNF2xiEt/oQyZvcU35iOsI+nECPX0at8jkFAteQwnHXsM83rGMS2gGD0h/y9KJGjqwhjOkpDn0Qhu3sI5MZnHj1d5kx6tlEdq8gjEU8CO667lXe81dr5auuOZGm/e8hjIquIem/oRh5OYIF15tkKNewzj0JTbsKif6xnpi85HVAHUSW2YGX2g8sprDodfWaccBXqHDlAb6n4RQBzhNIk2wyTeAAAAAAElFTkSuQmCC';
    var location = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEFSURBVDhPldLBSgJRFMbxa1iBWpZEKNLCXOTGV2jTok3hJjeJGzciKEhYZFFJUEGBb9i79P/uuY5MM1h+8OOeI2dm7tzRpWQXt3jEfVjvUEBqjsJ6gDn2fLfMPr5Q9N1y3qeDMmbIIYMumrjEBrSjZ2hO87HkMbbSDXGDt1DvQJlg20rLANdooKUfyBTvVvob6CKljWNoXtdFKaFvpXsJHvAEbVcZIXFw2tohXn3nXBWfUC8VKKo1p/koi3fS4ZxamcgZzq2M5hP5wKaVUXRIevc/U0NsW0RfIfZtV0XDdSvdCX7fbGW2oO0rOqSslf+P/mEXuPLdmtEhfWPtpy7SC2tKnPsBY5cdL3uLcA8AAAAASUVORK5CYII=';
    var cake = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADUSURBVDhPldG/y0FRHMfxI2VRZPRsNoPEajDIYpbBYvSjFIuYyMJI6RELBgYLZbAYbBZ/hH/F+3PvTZnc86lX59zv7XtO5xzzIwVvtE4NV1gvEMAOQWxVsImaTxhjr4Jt8ngh5XxZJIQjKjioYJMopu7ULL3Rd6yadUEdrLDGBg9v/vRG0X894Veq0Pn8pIecO3UzQRkRjLBAErq4LPTWbYTRRROf6HwqzqBV/zDAP1SPoYQ5hmjBSQZ3aMe+D9rgjARMGhfUfWrghjicaJWiBRqNeQPCOCuPjt7RvAAAAABJRU5ErkJggg==';
    var calendar = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiAQUQIh7cfRGYAAAA3UlEQVQoz4XQLUsEYRiF4Wt0wgZBg6BgsAqyghaxCYJo0igGo2ARwX9gMs5v2DJgEIsIwgaLRRBBWFg/gkVMMogLsgximHc/LDMnnud+DpwzqqctJyKHcgfmTGsXdiz1BuadOpZYNuZKagXMRhJHIWNfx6oLm159SEFCokxJ5E6zBFirTIjBroW+1dIYJgrgzHnfyf9HFMCiGTzo+rIRLrdi7z3gW4Yfv3JZALqiQcKTZ5MYMeHGuBpqOgOgLrMdPhvWTYEXl2Gr6pp7lobMa592cF8Urpy66bEEqP8BbZ4zdrylU6YAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDEtMDVUMTY6MzQ6MzArMDE6MDD1UbzXAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTAxLTA1VDE2OjM0OjMwKzAxOjAwhAwEawAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=';
    var location2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiAQUQKzGmbpeIAAABBUlEQVQoz2XQvyvEcRwG8Nf5OOrEKcqCAWXCYqErhUUGZWBThisZLBYGwy2sDJKysZisFln4EyRKkk1OGci5vsdw5355pve753k/Pe8npoIZkyI0OnPtH7Yslue0tXp63lzNnpaqFeyBbhkZ3YjZLRINoNUrWLFt2wp+fBW5RtAmC4JvBJATFP4EL7rAiR0cg7h8xSGvXYOCGxulTAmx2pApyzX7uv7qkFwZ1FumRxQ81DfR4rBk2+ygfFhCMGrVWKm/jD6rRovfBAM2jcs5d2famyFcejJswaxHTiXLTnFH9quck06DThOy3kUouHfuAzQZtOQ2hg5TeiQEQUAkEvn07EL2F1X9OjNU1/tKAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAxLTA1VDE2OjQzOjQ5KzAxOjAwoev+5wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMS0wNVQxNjo0Mzo0OSswMTowMNC2RlsAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC';
    var dot = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiAQgLACEvsO7JAAAAoUlEQVQoz4XRMWoCYRCG4QcDYmUQC8kl0opFzuAdTGkhXsJDpA+BtNtstQS2shWSAwi5gFjoNmOxBpb8/vgW03zDvDMMLSt7n0YyTDRCWKdRD5w04JA2PICzb08+bL1b+PGbU1VCqFLFH02n3uRZoTDzZmeRb1sK4WScKu5yV1EKocxf0e/Uf8x92XhRq03T+NFRCK9p1CoG17HD/P7Zd18AG/srRDKWuuIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDEtMDhUMTE6MDA6MzMrMDE6MDAgiSQwAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTAxLTA4VDExOjAwOjMzKzAxOjAwUdScjAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=';
    var mail = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEUSURBVDhPldLPKkVRFMfxTaEUA0xMFF5ACo8gKW9AV8IDEErIhDKQJP8VKSEDmRgw8ASmzORNfL+Le9E9zr1+9amzTnuds886O/2RTpxhD8doQ1Xpwzmao0qpHVfojionw9hFfVTfaYIPHIgqI5NYRU1U5anDDkai+oqLVzAVVX5cu4TpqMg23O4aDipw63OYwCLSO/rht5oC5jO43Q6sYwjPSEfYwIsFcbpdGVpgs+sW4G8svXEUW5iB23vFId6wD2dygkGY6Cs2mx7c4RSt3iC+7QK38PAU86vZSc5iGbXe+JEGuKuxqD5TavY0uSWnnpdxbMKHRfMDLuFQqkkv/Iwbiyc0evGPOI97Lx6RdSAqSNcf1a48SwEG3XsAAAAASUVORK5CYII=';
    
    var szaretlodziura = 'data:image/png;base64,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';
    //kolory

    ColorPick2();

    //umiejetnosci
    var ucar = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAG0SURBVDhP7Y/bK8NhHMbf/4B7+Qf8B/wLwoU2N5vaxRYuKIf81mIzq5nTWE5JoUw5xGJOOziXQ2qThIRw44aGiWV87dFb26+9jd258NRz83yfz/P+fuxfTGn29KlaVkNq69pTKqOjaPI5OCZWsWFZWz108Om7eafNO0ppb6xTNxL4AMPxZMVevZg7fREOiIwuGI4nS9O+8SoCU1nTtvHKcbnyLfNZlQN7URGUymDA8hnGCvWLOSXNq9dlvYFw1eAR1Q6fpGUwYLGBLVagdytrRs7eq4aOqWXhntqWQmnZ5n4gsNjAFisyzmYqzX6Xyrr15vA90sR+WAiKjK7D+0hgFSa/S1HvzeA/zpi6dfsqeBMh6Dej6ECB6wiB5TNxIXTuPH8X8Kpl6pKkDieZeiZlljrGyTJ9RfgbdMGIB23rocQvaBhYIc92kHYPz2VGhltiFyyfiavU6peV9F3TtBOUj8HIcEvsguUzcamMs98HtXX9RW3buq1o7I8aOseExg0ddMGoTDPJgzrJHtHp7aSVOkd59KPQBQOWR3FpDd15OqlLUW5oz+bRj0IXTGwwl0d/Xox9Af/dmZM5pYnsAAAAAElFTkSuQmCC';
    var ubulb = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIxSURBVDhPY0AH7i2nJaFMBvv6/RwBk84Gxcy81B8741IfiA0Sg0qjqMUJPNqPhbp0nOGPmnEpI3/5rStzjn/8tfHmn/8gDGLnL711JXL6pXSQGpBaqDb8IHbmpeaJB19/2Hbn339sGCQXO/1SM1Q5duDaelTHtf2Yr1/fWZOWbU9fYDMIGTdtffIiuOeUoXv7CW+39hP6UGMwQfLcqxu33P6L1RBkDFKTNOfKBqg23KBo+e1LME0nn/77f//9///X3vz7fx2IQWyQGEy+YPmti1BtaOD/f2ag0y8CY5CndPXdOzAN94AGgOijjyEYxL79DiIGwsWr7t4B6QHpBZkBNQ0V5C+/fQGm4cqrf/9PILkIxL4MFIPx85fdvgDVhhskzEYNwwcfEC569BHBBqlJnI0nDEExBYqx0P7zBm07nr6EabwBDDsY+y40CEAYpCaw95w+KGWAUgjUGOwgbtbl9Ruu/8ZpIEgufubldVDl+AEo9Xu2nVSrWHPvHi4Dy9feuwdSQ1ROgeVPYN7tXHnpB4aBKy5++weSQ1ZLFHBqPS7evPXpU3QDQWIgOagy0kD0tHN/u7bd/9e17R4Yd2+//z9+xoU/UGnSQdrci58O3vn8H4T7dj4E46wFlz9ApUkHQAM/oBuYPf/KO6g06SBp9oWH+259ghvYs/3B/5TZl+5DpUkHIf2n1GNnnL8QNe3cfxAGscMnn1SDSpMHgJmfxb39eIJb+7E4EBsqjAMwMAAAZe1eyFJUe5EAAAAASUVORK5CYII=';
    var uidea = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANvSURBVDhPfZPLTxtXGMWtNlLVrvpfRKpaddVld110X2XTVlVX3TRJhZKGLNLShiwakdjYAZMIbMeAGc+YwfiBwW8PY0Mg2HhsMMbGEJEY8IuQuIWUpjmdGd8xdXgc6Wg035zvN/ebuVd1mjo6Ot4x3KC/ZdTO9LjeU3MP+Oqufm/d0TdZoTXOlOEG852UIfGzpfl56DzVZS+mucU3/7yoYb9awl5xS75Kfv3nLrIzS29sGlfx/jX6E9J2svRXrB/bup2lg90KCvEsDp+XEWEi2FhMo5zPITgSwuFeBU+EnHitYkznKunaBj8l7a0SRzhn/J3O1Lfz+Le+jbWFJF48WxWh6y0u5ZdQXM7Imf3KGsydtjRzgXmXYI7U1z74fTry6OBtQDGzBOeAFyluvqWuOBmM7euvDn5FMEcydzKhA/GNUuigWkDMMY2dXBpukx/h2aegeybxsriKqJ3D882VJrC+nYOpk3YQzJFGbrOLSihiC8NhT4LpD4F9yCO6uAPfRAqU3o+pqQzoe54mULL5FhMjmIYe/PDgA1bn3FAChXgCrJnHdHxbhgn5Kh5nypgRSpjm8wiOci3Ah7dsMwTVkP4a9XWan30lPdzKpuG1BDFq4mSY352CReuR71OFGgLeDGz3JpCdW5Bhf9cKMN6kAwTVkPh3w/vlvBxgeycR4DeaK5NgUn3SHER0fhOx5A7imRKG1BNyvSz+9YFfrVqCaow7qnU0x53zRGHtmUIwtCKPae3zI8JyGL7jRDS+hbnEM7EWxLgxKOeTgdhf2jbTlwSnUvVct3yzzM/J4yree5qVQdI3E9aq4Pg18AtFccU1eN0ChMjjZtbWPV7QXtK+R3Aq1UCHdWTWxdUliBIKUEEEQnnwsYIMk8acTxYRCmREaAVUd2NcqefYlrnbRr+vvmj8fFTrXFeAO6tLGL7rhpfiQKmdEFaroHp9iLpnMSTWhUhjk0fZcLX7svEzgmoVdWcspwD/74T/EUZ0PrhMgWPPGM34Jmk/rtOAZ3mi37Op+cn0IUG0ynKbXX67QTpWynE8ydGxULnrkuEjgmhV/y/0ZWvXWN6qtq+Ix3BB3z5c8Q165X12EkyyEJ55pb5o+IIgzpbpJhM53D0ZpHg9kcD99uEfScvZMvxG9bI6R8Hec7otf9ie6K6ayQpVqv8AmmTW8brFDYkAAAAASUVORK5CYII=';
    var unet = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFpSURBVDhP5ZNLS8NAFIXz8/wBVVy4ELpwpd2oK7e601JQSWuCFKkIChIrxUcVQUUUbVIfWGhKU9PGFBeND0wk2GvukIhJGozYjfjBgeHemcO5kwz1D4kuCPGZnFjthgbpC4YaTl/R0CWGGGHJZ6i0DNgoNGGSq4BQe7Kr4fAZ7lw/QPpYAV4xYGRZhPH1OsS3JLsLUFZfgD2ouZQ60aAgv5K+y1Bp6bB41ICq1iYaW5OAPn+3TGW4lMMldRlm+SYIjbdPwyh7AxNcHUZXJZjKVsgBb0LmUA1O6DV0hONjLwyekQ3XyI6wdq8Z5MCP7hDZtT4KGmAqFK7zVi0sPkME0+Bvs2mNqdrJHL4mxGSOAhP+lm8Nn3UT5vJ3ML0tE83vy6QWBDHEt5zak8peJS3FMiWdK5mQE9tEuI5lbnXsdTpD3nIQvQm+jz17NB0zR8ypZkYShYi9LTz9s0LPQLK40knYs7f9OSjqA1ftwWcyEcXfAAAAAElFTkSuQmCC';
    var usql = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJ9SURBVDhPtZTfT1JhGMdPV3XXRf0F/Qf9AV31P3Tb1oVbNbZWaeaPatnCzUJBBI+IpgjBYck6IMNpIRqhoKZYibiGgggZiahoovLtfY+oqIdso57ts/Oc9zzns+fZe87L/POQS+RnZTe1l4ql8XbHBUGoqjb7O5v6Y8Wiec7HZHd0VxjtS8dyt2USumbnqejZAXDaQRhaXEL+zjkLe89n6Eg+8GEOzU8sEqZN0bfpXsjgNEYWtzG3kkXg5y68NE9lESJ4o9uYIWuf/HG0Sm2lJ4TDixlEk1sYjh6utUitmAwkDmTR1V2k0tsHssgqCgvHYxkk17YwRsT0foQwOhHDVGRDkIVIl7SzUZLvy/4opHzMXemYgUga7FMLeofmD2T5ne0zToU1/H1B6AykMBT+BVdwFTSnsiGSU9l0Yged6gFB9jWyjuHIFqbCaQQX0oJoNrqBIMHpjaLp0Zu9Telqc6N/MgGLfRr6djc8cxuwmXyw26aIOAVO4xI6M5C6sZllDDqDeKv3IJTIoIfzgef9sL7/dijMH/f4blIRFYqNGSZMfN8R3nN4Fk4KxWQebxgaqQ28eUyQxNeyiK9nj8hEhWKyQhtwXHZEqKzgMvSrN5KxTK2Dwh+wnxtYl/BX0Dwf+pzW5dMucxAhJ2G0tT0/PP4lFIvD/iWrfGC6wagruTJ1tbmvEA13u1ZUz7rjigpjUllu9InVUFRVZmNtCXteOHHE4vH19nP0WJI/NITa9G6o6+2bsluvrr0oYS/mSv4+Gkp1VxsrTfNsHR9j66xLhMQefExV072oKH+tBYMzufLTo/5eV6+iivMpq00jYsjLDBNyScflXPn/DIb5De9P+/tA5bK7AAAAAElFTkSuQmCC';
    var ucode = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKiSURBVDhPrZTtT1JhGIf50uf62N/Q/1RbW7PlarmG2ppiuiUndWsTB4IczgkTzdeSDBQRly8hqaH4AhmTiW87HV2gThTx13MfAS0hK3u2a7ufl/va/dxnz1H991FTKFzXaqzD1VXWicvAaV56yKWqLRFvP7Z34JGv51KQg1yqumLLHZpU2rqga7CjwdCXE9E8qJCJm3k3DEYHTHoHGl47FSG5ssJqsQeehe8YWz08x6KcQiQG+DaSWGBxNA7MSkf4vJlEMLoLsdl9sXBgchM2q/eczN7mw+iMhNC3Q8T2kgj9iZBkon4ISywpzpI+sUoylfnXD9Bs8GAmKGOVzS8UDs1tw1LvwtzmITbiKcixAwS3Tq85xSpd3jpCq96NYCSuCAXrYH7hSGQftkYP/IvyuZ6RbIViVl170zAiTDy7vIMaU3d+IfUsLB/Byq71MSD9Vra0fYxhlsOZOnMLp8Px7AcIsCuPeL5kZdJuCms7UNYysnHWbyoir9DZOwtvNAHH+3n4Jlfh+xpDr31OqSoQ2oKnf1Hp2ehEFN1vA0p7Ojr9+YV9Q2HMS0lM+TcwFpDhXd7DJItDKzsIMmh9fi0B17QEx3gUoysJ2N3h3MKKrm7o9fQKXDCb+qEz2CE0uZR5BoGhM7xDPdvLwl7X0/YzH6VGLd568qb9ONf7/BvIQS7Vi4fCNa5MbOPKRdevPC8WohqtmCivE/cJitnaeq6zXJm1jSswXk3/xE6GscB4RVtqMVdVCN5KDT9RXSpI950tuPvBpkCxtsQi0x6dobOUk07/edAGEwzca+UPbg7yINRNAioMr1DOtyhQXNwoKHsEnaWcnNJnJQKv1vHJwlYeWWwWFPEMcxoW09rZM5RDuWnN6ah9wN/g1ELRv0C5JxaV6gea8yDQIyC3owAAAABJRU5ErkJggg==';
    var umonitor = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFkSURBVDhPYxiUIHzapcMR0y4fhHKJA85tJ4VDJp9vB9FQITAIrb/CFjrl4tOI6ZcOQ4WIA4GTz3U27Xr/P3Di2flQITBwaz/e6dZ2TAXKxQRhUy8eAzr/GJQLBqGrVjG7th2bGzTx/ET3zmMpIEP8J57O9es9u8C17bg5VBkmcOk8rho65cIzoBceeXQez7Kv388CEnfrOF7h2X5MF6wICIDiPLGzrr2NnX39OVQIFQRPORfp33emxb3jeCPMEI/WE1q+fae2xs668jGg92wrWCESCJl0ITwIiKFcVBA/5/ptbLYFT7oYmTD3xv2wCRcioEIYIHXuJZfM+VdmJ826OBkqRMA2AiBt7uUZ9z/8+9+74+F9qBBlgGwD42Ze6G/eeOd+3PTzj6FCYEC2gcgakcONoIHEuAQXG6oUFRDjEoIGkqqRoIGUGILMhho3Ig2MnXbBJ2XOxRVxM88voITNwMDAAADniz0hwnbp6gAAAABJRU5ErkJggg==';
    var udocc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAD+SURBVDhPY6ApkJv8xUhh6qetQLwbFw5a821z/v7/AlAt+IHitE8LFad9/o8PZ27//n/G2R+viTIU6IKl2AxBxiADd9/7TZyhpBhIlKHEGGg5++1/45ar/41bIdig/fZxqHZMQIyBICzTeO+/aNqB/6KpB/5LFJ65D9WOCYg1EIRhhlLNQBAGGSpRRKSBMZu+/c/f/R0rBsnB1Ml2P9sM1Y4JyDEQpAeqHRMgG9h76uf/9Td/Y8UgOZINNJ339b/VIuwYJEeygVR3IXoYOi5FuAoZD5yBxGK8BhJTfGHiTwuh2jGB/LQvhgrTPm8B2oq1cMXAQLUgPVDttAAMDACjfJZ/FFN7mgAAAABJRU5ErkJggg==';
    var uother = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGqSURBVDhPYyAG+JVvM/Sv2mIA5VIGvMs368d2Hnkb13XkDYgNFSYfgAwBGRbfdfQ1soHBtTvNwxp21fvUbxKBCmECv8ptWqFNex6FNO1uhAqBAcggZMP869cLRLUeeF6x9P4/oPojUGFMADIwrHHPo9DGvQ1QIawAbGDbgeeVS+7/C2vcexgqTBkAeTmkcVcdXi8PTxDetKc5uuPg/bCmvYc9crexgwV9KraZ+lVtvQzmkAii2w7d797+4X/+3KvffCu2eIAFQSYHVGwxBnNIBECXHcqfc+1bZNuBh36lG6SgwuQDkGP8qza7e1dtloYKDQrwnxEYGZPCW/adC2/alw8VxAQBFVvV/Cu3RkG5OIFf1Xbv3BmXP4EiI7Hn2Auv6i3yUClUEFq/nwdkKJQLBoFV2yWBrlgGzJJLvUq2SIDEAip2+OTNvvIFZGBS36nnvtUbFcGKiQFAw842rXv+H4TDm/aehoj+Zwxr2jMrsmX/RaBFZRAxIkF0x6F7IJeAMIgNFSYfhDfvW5g9/eK77Knn34U1750PFaYM+FdvsfKt2mYB5eIBDAwAIaPCiuZ9+fcAAAAASUVORK5CYII=';
    
    var photoFile = document.getElementById("inputTypeFile").files;


    doc.addFont('BerkshireSwash-Regular.ttf', 'BerkshireSwash', 'normal');
    doc.addFont('Montserrat-Regular.ttf', 'Montserrat', 'normal');
    doc.addFont('Montserrat-Medium.ttf','MontserratB','normal');
    doc.addFont('Montserrat-SemiBold.ttf','MontserratSB','normal');
    doc.addFont('UbuntuMono-Regular.ttf','Ubuntu','normal');
    doc.addFont('Domine-Regular.ttf','Domine2','normal');

    doc.addFont('Raleway-Regular.ttf','Raleway','normal');
    
    var startx = 0;
    var starty = 0;

    //DANE PODSTAWOWE
    
    //Imie i nazwisko

    var namelength = 0;

    var xeducationstart = 94;
    var yeducationstart = 58.5;
    
    var xknowhowstart = 18.5;
    var yknowhowstart = 58.5;
    

    //0,170
    doc.setFont('Raleway'); 
    

    var email = $('#email').val(); 
    var home = $('#home').val();
    var number = $('#number').val();
    var dateOfBirth = $('#dateOfBirth').val();

    doc.setTextColor(naglowkicolor);

    var startx = 10;
    var starty = 40;
    var start=startx;

    startx = (210-((email.length+home.length+number.length+dateOfBirth.length)*2.4))/2;

    if(((email.length+home.length+number.length+dateOfBirth.length)*2.4)<150)
        {
            //email

            doc.addImage(mail,'PNG',startx,starty); //starty=30
            starty+=3;
            startx+=6;

            doc.setFontSize(7.5);
            doc.text(startx,starty,email);  //starty=33

            startx+=email.length*1.5 + 7;

            //miejsce zamieszkania

            //home

            starty-=3;
            doc.addImage(location,'JPEG',startx,starty);
            startx+=6;

            starty+=3;
            doc.text(startx,starty,home);  

            startx+=home.length*1.5 + 7;

            //telefon

            //number

            starty-=4;
    
            doc.addImage(telephone,'PNG',startx,starty);
            startx+=6;
            starty+=3;
    
            doc.text(startx,starty,number);
    
            startx+=number.length*1.5 + 7;
    
            //data urodzenia
    
            //dateOfBirth
    
            starty-=3;
    
            doc.addImage(cake,'PNG',startx,starty);
            startx+=6;
            starty+=3;
    
            doc.text(startx,starty,dateOfBirth);

            starty=51; //poczatek nastepnej sekcji

        }
    else {

        starty-=2;
        startx = 15;

        //email

        doc.addImage(mail,'PNG',startx,starty); //starty=30
        starty+=3;
        startx+=6;

        doc.setFontSize(7.5);
        doc.text(startx,starty,email);  //starty=33

        startx+=email.length*1.5 + 12;

        //miejsce zamieszkania

        //number

        starty-=3;

        doc.addImage(telephone,'JPEG',startx,starty);
        startx+=6;
        starty+=3;

        doc.text(startx,starty,number);
        

        starty+=3.5;
        startx=32;

        //home

        doc.addImage(cake,'JPEG',startx,starty);
        startx+=6;
        starty+=3;
        doc.text(startx,starty,dateOfBirth);
        

        startx+=dateOfBirth.length*1.45 + 8.75;


        //data urodzenia

        //dateOfBirth

        starty-=3;

        doc.addImage(location,'PNG',startx,starty);
        startx+=6;
        starty+=3;
        doc.text(startx,starty,home);  
        starty=54; //poczatek nastepnej sekcji

    }

    //EDUKACJA

    startx = xeducationstart; //POCZATEK SEKCJI EDUKACJA
    starty = yeducationstart;


    if(EducationCorrect()==true)
    {
        var start=startx;
        
        doc.setFontSize(17);
        doc.setFont('MontserratB');
        
        doc.setTextColor(niebieski); 
        doc.text(start,starty,"edukacja");  //WZOR LINIA DLUGA

        doc.setFont('Montserrat');

        starty+=8;

        var x = document.getElementsByName("educationSection");

        var n=0;
        for (var i=0; i<education_value; i++)
        {
            //checkbox [0]

            if (x[n].checked == true)

            {
                //Kierunek [1] + rodzaj [3]

                doc.setFontSize(12);
                doc.setTextColor(zwyklytekstcolor); //szary //troszke przyciemnic
                if(x[3+n].value == '' || x[3+n].value==' ')
                    doc.text(startx, starty, x[n+1].value);
                else {
                    doc.text(startx, starty, x[n+1].value+', '+ x[3+n].value);
                }
                starty = starty+5;

                //Nazwa wydziału [2]
                doc.setFontSize(10);
                doc.setTextColor(wyroznionytekstcolor);
                doc.text(startx, starty, x[2+n].value);
                starty = starty+3.5;

                //Okres [4]

                doc.setFontSize(8);
                doc.setTextColor(zwyklytekstcolor);
                doc.addImage(calendar,'JPEG',startx,starty,1.5,1.5);
                startx=startx+2.5;
                starty=starty+1.5;
                doc.text(startx+0.5, starty+0.25, x[4+n].value);
                startx=startx+45;
                starty=starty-1.5;

                //Miejsce [5]

                doc.addImage(location2,'JPEG',startx,starty,1.5,1.5);
                startx=startx+2.5;
                starty=starty+1.5;
                doc.text(startx+0.5, starty+0.25, x[5+n].value);
                startx=start;
                starty=starty+4.5;

                if(i!=education_value-1)
                    doc.addImage(dottedLine,'JPEG',startx-1,starty,104,2); //WZOR LINIA PRZERYWANA 
                startx=start;
                starty=starty+7;
            }
            n=6+n;
        }

        var x = document.getElementsByName("educationSection2");
        var n=0;

        starty -= 5;

        for (var i=0; i<education_value2; i++)
        {
            //checkbox [0]
            if (x[n].checked == true)
            {
                
                doc.addImage(dottedLine,'JPEG',startx-1,starty,104,2); //WZOR LINIA PRZERYWANA 
                startx=start;
                starty=starty+8;

                    //nazwa [1]

                doc.setFontSize(12);
                doc.setTextColor(zwyklytekstcolor); //szary 
                
                doc.text(startx, starty, x[n+1].value);

                starty = starty+5;

                //profil [2]
                doc.setFontSize(10);
                doc.setTextColor(wyroznionytekstcolor);
                doc.text(startx, starty, x[2+n].value);
                starty = starty+3.5;

                //Okres [3]

                doc.setFontSize(8);
                doc.setTextColor(zwyklytekstcolor);
                doc.addImage(calendar,'JPEG',startx,starty,1.5,1.5);
                startx=startx+2.5;
                starty=starty+1.5;
                doc.text(startx+0.5, starty+0.25, x[3+n].value);
                startx=startx+45;
                starty=starty-1.5;

                //Miejsce [4]

                doc.addImage(location2,'JPEG',startx,starty,1.5,1.5);
                startx=startx+2.5;
                starty=starty+1.5;
                doc.text(startx+0.5, starty+0.25, x[4+n].value);
                startx=start;
                starty=starty+5;

                
            }
            n=5+n;
        }

        starty+=8;
    }

    

    //DOSWIADCZENIE

    if(ExperienceCorrect()==true)
    {
        startx = xeducationstart; //POCZATEK SEKCJI DOSWIADCZENIE
        
        var x = document.getElementsByName("experienceSection");
    
        var start=startx;
        
        doc.setFontSize(17);
        doc.setFont('MontserratB');
        doc.setTextColor(turkus); 

        doc.text(start,starty,"doświadczenie"); 
        starty+=8;

        //WZOR LINIA DLUGA

        doc.setFont('Montserrat');
        doc.setTextColor(zwyklytekstcolor);
        

        var n=0;
        

        for (var i=0; i<experience_value; i++)
        {
            if (x[n].checked == true)
            {
                //Nazwa firmy [1]
                doc.setFontSize(12);
                doc.setTextColor(zwyklytekstcolor); //szary //troszke przyciemnic
                doc.text(startx, starty, x[n+1].value);
                starty = starty+5;
    
                //Stanowisko [2]
                doc.setFontSize(10);
                doc.setTextColor(wyroznionytekstcolor);
                doc.text(startx, starty, x[2+n].value);
                starty = starty+3;
    
                //Okres pracy [3]
    
                doc.setFontSize(8);
                doc.setTextColor(zwyklytekstcolor);
                doc.addImage(calendar,'JPEG',startx,starty,1.5,1.5);
                startx=startx+2.5;
                starty=starty+1.5;
                doc.text(startx, starty, x[3+n].value);
                startx=startx+45;
                starty=starty-1.5;
    
                //Miejsce pracy [4]
    
                doc.addImage(location2,'JPEG',startx,starty,1.5,1.5);
                startx=startx+2.5;
                starty=starty+1.5;
                doc.text(startx, starty, x[4+n].value);
                startx=start;
                starty=starty+4.5;
    
                //Zakres obowiazkow [5]
                doc.setFontSize(7.5);
                doc.text(startx, starty,"Zakres obowiązków: "+" " +x[5+n].value);
                startx=start-1;
                starty=starty+2;

                if(i!=experience_value-1)
                    doc.addImage(dottedLine,'JPEG',startx,starty,104,2); //WZOR LINIA PRZERYWANA
                startx=start;
                starty=starty+8.5;
            }
            n+=6;
        }
        starty+=5;
    
    }

    startx=xknowhowstart; 
    starty = yknowhowstart;

    //UMIEJETNOSCI //skonczone

    //napis umiejetnosci
    

    if(KnowhowCorrect()==true)
    {
        doc.setFontSize(17);
        doc.setTextColor(zielen); //niebieski
        doc.setFont('MontserratB');

        doc.text(startx,starty,"umiejętności"); //napis
        starty+=8;
        startx+=2;

            //proponowane

        start=xknowhowstart;
        startx=start;

        doc.setFontSize(9);
        doc.setFont('Montserrat');
        doc.setTextColor(zwyklytekstcolor);

        z = document.getElementsByName("knowhowName");
        
        n=0;
        for (i=0;i<5;i++)
        {
            if (z[i+n].checked == true)
            {
                if(i+n==0)
                {
                    doc.addImage(udocc,'JPEG',startx,starty);
                }
                else if(i+n==3)
                {
                    doc.addImage(ucode,'JPEG',startx,starty);
                }
                else if(i+n==6)
                {
                    doc.addImage(usql,'JPEG',startx,starty);
                }
                else if(i+n==9)
                {
                    doc.addImage(unet,'JPEG',startx,starty);
                }
                else if(i+n==12)
                {
                    doc.addImage(umonitor,'JPEG',startx,starty);
                }
                else {
                    doc.addImage(umonitor,'JPEG',startx,starty);
                }
                
                startx+=8;

                doc.setTextColor(wyroznionytekstcolor);

                doc.text(startx,starty,z[i+n+1].innerHTML);
                starty+=5;
                doc.setTextColor(zwyklytekstcolor);
                doc.text(startx,starty,z[i+n+2].value);
                starty+=7;
                
                startx=start;
            }

            n+=2;
        }

        n=0;

        
        doc.setTextColor(wyroznionytekstcolor);
        for (i=15;i<18;i++) //tutaj cos
        {

            doc.setFontSize (9);
            if (z[i+n].checked == true)

            {
                if(i+n+1==16) //anal. myslenie
                {
                    doc.addImage(ubulb,'JPEG',startx,starty);
                    startx+=7;
                    starty+=2;

                    doc.text(startx,starty,'Umiejętność analitycznego');
                    starty+=5;
                    doc.text(startx,starty,'myślenia.');

                }

                if(i+n+1==18) //przyswajanie wiedzy
                {
                    doc.addImage(uidea,'JPEG',startx,starty);
                    startx+=7;
                    starty+=2;

                    doc.text(startx,starty,'Zdolność szybkiego przyswajania');
                    starty+=5;
                    doc.text(startx,starty,'wiedzy.');
                }

                if(i+n+1==20) //prawo jazdy
                {
                    doc.addImage(ucar,'JPEG',startx,starty);
                    startx+=7;
                    starty+=2;

                    starty+=1;
                    doc.text(startx,starty,z[i+n+1].innerHTML);
                    starty+-1;
                }

                starty+=6;
                n+=1;

                startx=start;
            }
        }

        z = document.getElementsByName("knowhowName2");

        startx=start;

        var n=0;
        for(var i=0; i<knowhow_value;i++)
        {
            if(z[i+n].checked == true)
            {
                doc.setTextColor(wyroznionytekstcolor);
                doc.setFontSize (9);

                doc.addImage(uother,'PNG',startx,starty);
                startx+=7.63;
                starty+=2;

                doc.text(startx,starty,z[i+n+1].value);
                doc.setTextColor(zwyklytekstcolor);
                doc.setFontSize (8);
                starty+=5;
                doc.text(startx,starty,z[i+n+2].value);
                startx-=7.63;
                starty+=5;
                
            }
            n=+2;
            //starty+=2;
        }

        starty+=7;
    }

    

    //ZAINTERESOWANIA

    

    startx=xknowhowstart;

    start=startx;

    if(InterestsCorrect()==true)
    {
        doc.setFontSize(17);
        doc.setTextColor(prawielila); //niebieski
        doc.setFont('MontserratB');

        doc.text(startx,starty,"zainteresowania"); 


        starty=starty+8;

        doc.setFont('Ubuntu');
        doc.setFontSize(10);
        doc.setTextColor(zwyklytekstcolor);
        z = document.getElementsByName("interestsName");
        var n = 0;

        var interestslength = 0;

        for(var i=0; i<interests_value ; i++)
        {
            if(z[i+n].checked == true)
            {
                interestslength+=z[i+n+1].value.length*1.8 + 5;

                if(interestslength<67)
                {
                    doc.addImage(dottedLine,'JPEG',startx,starty,z[i+n+1].value.length*1.8,3);
                    doc.text(startx, starty, z[i+n+1].value);
                    startx += (z[i+n+1].value.length*1.8) + 5;
                }
                else
                {
                    startx = start;
                    starty += 6;
                    doc.addImage(dottedLine,'JPEG',startx,starty,z[i+n+1].value.length*1.8,3);
                    doc.text(startx, starty, z[i+n+1].value);
                    startx += (z[i+n+1].value.length*1.8) + 5;
                    interestslength=z[i+n+1].value.length*1.8 + 5;
                }             
                
            }
            n+=1;
        }

        starty+=14;
    }

    //CECHY

    startx=xknowhowstart;

    start=startx;

    if(CharacterCorrect()==true)
    {
        doc.setFontSize(17);
        doc.setTextColor(musztardowy); //niebieski
        doc.setFont('MontserratB');

        doc.text(startx,starty,"cechy"); //napis

        starty+=8;
        startx+=2;

        doc.setFontSize(9);
        doc.setFont('Montserrat');
        doc.setTextColor(zwyklytekstcolor);

        z = document.getElementsByName("characterName");

        n=0;
        characterposition=0;

        for(var i=0; i<character_value ; i++)
        {
            if(z[i+n].checked == true)
            {
                if(characterposition==0)
                {
                    startx=start+1;
                    doc.addImage(dot,'JPEG',startx,starty,1.5,1.5);
                    startx+=4;
                    starty+=2;
                    doc.text(startx,starty,z[i+n+1].value);
                    starty-=2;
                    characterposition=1;
                    if(i==character_value-1)
                        starty+=7;
                }
                else if(characterposition==1)
                {
                    startx=xknowhowstart+32;
                    doc.addImage(dot,'JPEG',startx,starty,1.5,1.5);
                    startx+=4;
                    starty+=2;
                    doc.text(startx,starty,z[i+n+1].value);
                    starty+=5;
                    characterposition=0;
                }
            }
            n+=1;
        }
        starty+=11;
    }
    

    

    //JĘZYKI

    //napis

    startx=xknowhowstart;
    
    start=startx;

    if(LanguageCorrect()==true)
    {
        doc.setFontSize(17);
        doc.setTextColor(innyorange); //niebieski
        doc.setFont('MontserratB');

        doc.text(startx,starty,"języki"); //napis


        starty+=8;
        startx+=2;

        //tresc

        doc.setFontSize(9);
        doc.setFont('Montserrat');
        doc.setTextColor(zwyklytekstcolor);

        z = document.getElementsByName("languageName");

        start+=2;
        var start2=xknowhowstart+32;

        n=0;

        for(var i=0; i<language_value ; i++)
        {
            if(z[i+n].checked == true)
            {
                doc.text(start,starty,z[i+n+1].value);
                doc.text(start2,starty,z[i+n+2].value);
    
                starty+=6;
            }
            n+=2;
        }
        starty+=8;
    }

    //reszta

//klauzula

doc.setFontSize (8);

var klauzula1 = '"Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji';
var klauzula2= '(zgodnie z Ustawą z dnia 29.08.1997 roku o Ochronie Danych Osobowych; tekst jednolity: Dz. U. 2016 r. poz. 922). "';
doc.text(20,280,klauzula1);
doc.text(24,285,klauzula2);

//dodanie zdjecia

if (photoFile.length > 0){
    var fileToLoad = photoFile[0];

    var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {
        Base64data = fileLoadedEvent.target.result; // <--- data: base64
        
        var divImage = document.getElementById("newImage");
        var newImage = document.createElement('img');
        newImage.src = Base64data;

        divImage.innerHTML = newImage.outerHTML;
        
        doc.addImage(Base64data,'PNG',174.2,7,26,26);
        doc.addImage(tlogora,'PNG',5,5,200,30);

        doc.setTextColor(imienazwiskocolor);
        doc.setFontSize(24);

        if($('#name2').val()==" " || $('#name2').val()=="")
        {
            var name = $('#name1').val()+' '+$('#name3').val();
        }
            else
        {
            var name = $('#name1').val()+' '+$('#name2').val()+' '+$('#name3').val();
        }

        doc.setFont('BerkshireSwash');
        startx = 15;
        starty = 17;

        if(name.length>28)
        {
            if($('#name2').val()==" " || $('#name2').val()=="")
            {
                doc.setFontSize(19);
                doc.text(startx, starty-2, name); 
                starty-=3;
            }
            else
            {
                doc.setFontSize(19);
                doc.text(startx, starty-2, ($('#name1').val()+' '+$('#name2').val())); 
                starty+=8;
                doc.text(startx,starty-2,$('#name3').val());
                starty-=3;
            }
        }
        else {
            doc.text(startx, starty, name); 
        }

        starty+=9;
        //krotki opis
        doc.setFont('Montserrat');
        doc.setTextColor(opiskolor); //tez pogrubiona
        doc.setFontSize (15);
        var information = $('#information').val().toLowerCase();

        doc.text(startx,starty,information); 
        
        doc.save(name+' CV'+'.pdf');

    }

    fileReader.readAsDataURL(fileToLoad);
}
else {

        doc.addImage(tlogorab,'PNG',5,5,200,30);
        
        doc.setTextColor(imienazwiskocolor);
        doc.setFontSize(24);

        if($('#name2').val()==" " || $('#name2').val()=="")
        {
            var name = $('#name1').val()+' '+$('#name3').val();
        }
            else
        {
            var name = $('#name1').val()+' '+$('#name2').val()+' '+$('#name3').val();
        }

        doc.setFont('BerkshireSwash');
        startx = 15;
        starty = 17;

        if(name.length>28)
        {
            if($('#name2').val()==" " || $('#name2').val()=="")
            {
                doc.setFontSize(19);
                doc.text(startx, starty-2, name); 
                starty-=3;
            }
            else
            {
                doc.setFontSize(19);
                doc.text(startx, starty-2, ($('#name1').val()+' '+$('#name2').val())); 
                starty+=8;
                doc.text(startx,starty-2,$('#name3').val());
                starty-=3;
            }
        }
        else {
            doc.text(startx, starty, name); 
        }

        starty+=9;
        //krotki opis
        doc.setFont('Montserrat');
        doc.setTextColor(opiskolor); //tez pogrubiona
        doc.setFontSize (15);
        var information = $('#information').val().toLowerCase();

        doc.text(startx,starty,information); 



        doc.save(name+' CV'+'.pdf');
    }


}