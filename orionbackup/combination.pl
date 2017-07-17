use strict; use warnings;
use Data::Dumper;
my @a=([1,2,3],['b','r','g'],['L','X']);

my @b;
foreach my $i (@{$a[0]}){
        foreach my $c (@{$a[1]}){
                    foreach my $k (@{$a[2]}){
                                    push @b, [$i, $c, $k];
                                            }
                                                }
                                            }

                                            print Dumper(\@b);
