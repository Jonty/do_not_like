OUTNAME=do_not_like.zip

$(OUTNAME):
	cd chrome_extension && zip -r -FS ../$(OUTNAME) *

clean: $(OUTNAME)
	rm $(OUTNAME)