# Apollo- @abstr_number 

Original Apollo @abstr_number guidance computer (AGC) source code, converted from their custom .agc files to .s files for syntax highlighting, for Command Module (Comanche @abstr_number ) and Lunar Module (Luminary @abstr_number ). Digitized by the folks at @abstr_hyperlink and @abstr_hyperlink . The goal is to be a repo for the original Apollo @abstr_number source code. As such, PRs are welcome for any issues identified between the transcriptions in this repository and the original source scans for @abstr_hyperlink and @abstr_hyperlink , as well as any files I may have missed.

## Compilation

If you are interested in compiling the original source code, check out @abstr_hyperlink .

## Attribution
    
    
     Copyright: Public domain.
     Filename:  CONTRACT_AND_APPROVALS.agc
     Purpose:   Part of the source code for Colossus  @abstr_number A, AKA Comanche  @abstr_number .
                It is part of the source code for the Command Module's (CM)
                Apollo Guidance Computer (AGC), for Apollo  @abstr_number .
     Assembler: yaYUL
     Contact:   Ron Burkey <info@sandroid.org>.
     Website:   www.ibiblio.org/apollo.
     Mod history:    @abstr_number - @abstr_number - @abstr_number  RSB  Transcribed from page images.
    
     This source code has been transcribed or otherwise adapted from digitized
     images of a hardcopy from the MIT Museum.  The digitization was performed
     by Paul Fjeld, and arranged for by Deborah Douglas of the Museum.  Many
     thanks to both.  The images (with suitable reduction in storage size and
     consequent reduction in image quality as well) are available online at
     www.ibiblio.org/apollo.  If for some reason you find that the images are
     illegible, contact me at info@sandroid.org about getting access to the
     (much) higher-quality images which Paul actually created.
    
     Notations on the hardcopy document read, in part:
    
        Assemble revision  @abstr_number  of AGC program Comanche by NASA
         @abstr_number - @abstr_number .   @abstr_number : @abstr_number  APR.  @abstr_number ,  @abstr_number   
    
     Page  @abstr_number 
    
    #************************************************************************
    #                                                                       *
    #       THIS AGC PROGRAM SHALL ALSO BE REFERRED TO AS:                  *
    #                                                                       *
    #                                                                       *
    #               COLOSSUS  @abstr_number A                                             *
    #                                                                       *
    #                                                                       *
    #   THIS PROGRAM IS INTENDED FOR USE IN THE CM AS SPECIFIED             *
    #   IN REPORT R- @abstr_number .  THIS PROGRAM WAS PREPARED UNDER DSR               *
    #   PROJECT  @abstr_number - @abstr_number , SPONSORED BY THE MANNED SPACECRAFT                *
    #   CENTER OF THE NATIONAL AERONAUTICS AND SPACE                        *
    #   ADMINISTRATION THROUGH CONTRACT NAS  @abstr_number - @abstr_number  WITH THE                 *
    #   INSTRUMENTATION LABORATORY, MASSACHUSETTS INSTITUTE OF              *
    #   TECHNOLOGY, CAMBRIDGE, MASS.                                        *
    #                                                                       *
    #************************************************************************
    
    
    SUBMITTED:  MARGARET H. HAMILTON        DATE:    @abstr_number  MAR  @abstr_number 
        M.H.HAMILTON, COLOSSUS PROGRAMMING LEADER
        APOLLO GUIDANCE AND NAVIGATION
    
    APPROVED:   DANIEL J. LICKLY        DATE:    @abstr_number  MAR  @abstr_number 
        D.J.LICKLY, DIRECTOR, MISSION PROGRAM DEVELOPMENT
        APOLLO GUIDANCE AND NAVIGATION PROGRAM
    
    APPROVED:   FRED H. MARTIN          DATE:    @abstr_number  MAR  @abstr_number 
        FRED H. MARTIN, COLOSSUS PROJECT MANAGER
        APOLLO GUIDANCE AND NAVIGATION PROGRAM
    
    APPROVED:   NORMAN E. SEARS         DATE:    @abstr_number  MAR  @abstr_number 
        N.E. SEARS, DIRECTOR, MISSION DEVELOPMENT
        APOLLO GUIDANCE AND NAVIGATION PROGRAM
    
    APPROVED:   RICHARD H. BATTIN       DATE:    @abstr_number  MAR  @abstr_number 
        R.H. BATTIN, DIRECTOR, MISSION DEVELOPMENT
        APOLLO GUIDANCE AND NAVIGATION PROGRAM
    
    APPROVED:   DAVID G. HOAG           DATE:    @abstr_number  MAR  @abstr_number 
        D.G. HOAG, DIRECTOR
        APOLLO GUIDANCE AND NAVIGATION PROGRAM
    
    APPROVED:   RALPH R. RAGAN          DATE:    @abstr_number  MAR  @abstr_number 
        R.R. RAGAN, DEPUTY DIRECTOR
        INSTRUMENTATION LABORATORY
    
